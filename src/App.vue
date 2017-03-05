<template>
  <div id="app">
    <div class="top-bar"></div>
    <div class="container">
      <div class="content">
        <img src="./assets/IELE-logo.png" alt="LOGO" style="width: 100%">
        <navbar></navbar>
        <div class="container-fluid">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
    <footer class="foot-bar"></footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import * as types from './store/mutations_types'

export default {
  name: 'app',
  computed: {
    routerPath () {
      return this.$store.state.route.path
    }
    // current path (string)
    // current params (object)
    // current query (object)
  },
  created () {
    this.checkToken()
  },
  components: {
    Navbar
  },
  methods: {
    checkToken () {
      if (window.localStorage.getItem('userLoginToken')) {
        this.$http.post('/apis/checkToken', {
          token: window.localStorage.getItem('userLoginToken')
        }).then((res) => {
          this.$store.commit(types.USER_LOGIN, {
            userId: res.data.data.userId,
            userName: res.data.data.userName
          })
        }).catch((err) => {
          this.$store.commit(types.USER_LOGOUT)
          console.log(err)
        })
      }
    }
  },
  watch: {
    '$route': 'checkToken'
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.content {
  background-color: #FFF;
  -moz-box-shadow:4px 4px 12px -2px rgba(20%,20%,40%,0.5);
  -webkit-box-shadow:4px 4px 12px -2px rgba(20%,20%,40%,0.5);
  box-shadow:0px 0px 12px 2px rgba(20%,20%,40%,0.5);
}
.top-bar {
  height: 5px;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: #333;
  margin-bottom: 10px;
}
.foot-bar {
  height: 10px;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: #333;
  margin-top: 10px;
}
body {
  background-color: #e9ebee;
}
.fade-enter-active {
  transition: all .3s ease;
}
.fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter,
.fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}
</style>
