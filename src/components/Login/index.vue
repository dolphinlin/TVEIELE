<template lang="html">
  <div class="container-fluid login">
    <div class="row">
      <div class="col-lg-12" v-if="message">
        <div class="alert alert-danger" role="alert">
          <strong>錯誤!</strong> 帳號密碼有誤
        </div>
      </div>
      <div class="col-lg-12" v-if="!inputBlank">
        <div class="alert alert-warning" role="alert">
          <strong>注意!</strong> 請輸入帳號密碼
        </div>
      </div>
      <div class="col-lg-4 col-lg-offset-4">
        <div class="panel panel-info text-center">
          <div class="panel-heading">
            <h3 class="panel-title">
              登入
            </h3>
          </div>
          <div class="panel-body">
            <form @submit.prevent="userLogin">
              <div class="form-group">
                <label class="sr-only" for="user">帳號</label>
                <input type="text" class="form-control" id="user" placeholder="帳號" v-model="user">
              </div>
              <div class="form-group">
                <label class="sr-only" for="password">密碼</label>
                <input type="password" class="form-control" id="password" placeholder="密碼" v-model="password">
              </div>
              <div class="form-group">
                <button class="btn btn-primary btn-block" type="submit" name="button" @click.prevent="userLogin">登入</button>
              </div>
              <div class="form-group">
                <button class="btn btn-danger btn-block" type="button" name="button" @click="gotoRegister">註冊</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import bcrypt from 'bcrypt'
import * as types from '../../store/mutations_types'

export default {
  name: 'login',
  data () {
    return {
      user: '',
      password: '',
      message: false
    }
  },
  computed: {
    inputBlank () {
      return this.user && this.password
    }
  },
  methods: {
    userLogin () {
      if (this.inputBlank) {
        this.$http.post('/apis/login', {
          user: this.user,
          password: this.password
        }).then((res) => {
          if (res.data.success) {
            window.localStorage.setItem('userLoginToken', res.data.token)
            this.$store.commit(types.USER_LOGIN, {
              userId: res.data.userId,
              userName: res.data.userName
            })
            this.$router.push({
              path: this.$route.query.redirect || '/'
            })
            this.message = false
          } else {
            this.message = true
          }
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    gotoRegister () {
      this.$router.push({name: 'regist'})
    }
  }
}
</script>

<style lang="css">
</style>
