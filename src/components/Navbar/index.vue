<template lang="html">
  <!-- Fixed navbar -->
    <nav class="navbar navbar-default navbar-static-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/"><strong>前瞻技職教育研討會</strong></a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <router-link @click.native="toggleNavbar" to="/" tag="li" active-class="active" exact>
              <a>首頁</a>
            </router-link>
            <router-link @click.native="toggleNavbar" to="/news" tag="li" active-class="active">
              <a>技職教育學刊</a>
            </router-link>
            <router-link @click.native="toggleNavbar" to="/contribute" tag="li" active-class="active">
              <a>線上投稿</a>
            </router-link>
            <router-link @click.native="toggleNavbar" to="/activity" tag="li" active-class="active">
              <a>線上報名</a>
            </router-link>
            <router-link @click.native="toggleNavbar" to="/map" tag="li" active-class="active">
              <a>交通資訊</a>
            </router-link>
          </ul>
          <ul class="nav navbar-nav navbar-right" v-if="!logined">
            <router-link @click.native="toggleNavbar" to="/regist" tag="li" active-class="active">
              <a>註冊</a>
            </router-link>
            <router-link @click.native="toggleNavbar" to="/login" tag="li" active-class="active">
              <a>登入</a>
            </router-link>
          </ul>
          <ul class="nav navbar-nav navbar-right" v-if="logined">
            <router-link @click.native="toggleNavbar" to="/me" tag="li" active-class="active">
              <a>Hello {{userName}} !!</a>
            </router-link>
            <li>
              <a @click.prevent="userLogout" href="#">登出</a>
            </li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
</template>

<script>
import * as types from '../../store/mutations_types'

export default {
  computed: {
    logined () {
      return this.$store.state.userInfo.logined
    },
    userName () {
      return this.$store.state.userInfo.name
    }
  },
  methods: {
    toggleNavbar (e) {
      this.toggle = document.getElementsByClassName('navbar-toggle')[0]
      if (document.querySelectorAll('.navbar-collapse.in').length !== 0) {
        this.toggle.click()
      }
    },
    userLogout () {
      this.$store.commit(types.USER_LOGOUT)
      this.$router.push({name: 'index'})
    }
  }
}
</script>

<style lang="css">
  ul.nav a:hover {
    background-image: linear-gradient(to bottom,#dbdbdb 0,#eee 100%);
    box-shadow: inset 0 3px 9px rgba(0,0,0,.075);
  }
</style>
