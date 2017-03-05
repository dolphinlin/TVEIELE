<template lang="html">
  <div class="container-fluid regist">
    <div class="row">
      <div class="col-lg-12" v-if="message">
        <div class="alert alert-danger" role="alert">
          <strong>錯誤!</strong> 請檢查帳號申請表格是否有誤
        </div>
      </div>
      <div class="col-lg-4 col-lg-offset-4">
        <div class="panel panel-info text-center">
          <div class="panel-heading">
            <h3 class="panel-title">
              註冊
            </h3>
          </div>
          <div class="panel-body">
            <form method="post">
              <div class="form-group has-feedback" :class="changeInputClass(UserCheck)">
                <label class="sr-only" for="user">帳號</label>
                <input type="text" class="form-control" id="user" placeholder="帳號(至少4位)" v-model="user">
                <span class="glyphicon form-control-feedback" :class="changeIconClass(UserCheck)" aria-hidden="true"></span>
              </div>
              <div class="form-group">
                <label class="sr-only" for="password">密碼</label>
                <input type="password" class="form-control" id="password" placeholder="密碼(英數混合 至少8位)" v-model="password">
              </div>
              <div class="form-group has-feedback" :class="changeInputClass(rePasswordCheck)">
                <label class="sr-only" for="repassword">再次輸入密碼</label>
                <input type="password" class="form-control" id="repassword" placeholder="再次密碼" v-model="repassword">
                <span class="glyphicon form-control-feedback" :class="changeIconClass(rePasswordCheck)" aria-hidden="true"></span>
              </div>
              <div class="form-group has-feedback" :class="changeInputClass(NameCheck)">
                <label class="sr-only" for="name" >姓名</label>
                <input type="text" class="form-control" id="name" placeholder="姓名" v-model="name">
                <span class="glyphicon form-control-feedback" :class="changeIconClass(NameCheck)" aria-hidden="true"></span>
              </div>
              <div class="form-group has-feedback" :class="changeInputClass(EmailCheck)">
                <label class="sr-only" for="email">信箱</label>
                <input type="mail" class="form-control" id="email" placeholder="信箱" v-model="email">
                <span class="glyphicon form-control-feedback" :class="changeIconClass(EmailCheck)" aria-hidden="true"></span>
              </div>
              <div class="form-group">
                <button class="btn btn-danger btn-block" @click.prevent="registUser" type="button" name="button">註冊</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'regist',
  data () {
    return {
      user: '',
      password: '',
      repassword: '',
      email: '',
      name: '',
      message: false,
      sitekey: '6LfK7hAUAAAAAJ8EVBF_cH6PBDERACqcb9a1grAi'
    }
  },
  computed: {
    rePasswordCheck () {
      return this.password === this.repassword && this.password !== '' && /^(?!.*[^a-zA-Z0-9])(?=.*\d)(?=.*[a-zA-Z]).{8,20}$/.test(this.password)
    },
    UserCheck () {
      return /^\w{4,20}$/.test(this.user)
    },
    EmailCheck () {
      return /^\w+((-\w+)|(\.\w+))*[@]{1}[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(this.email)
    },
    NameCheck () {
      return this.name.length > 0
    }
  },
  methods: {
    registUser () {
      if (this.UserCheck && this.rePasswordCheck && this.NameCheck && this.EmailCheck) {
        this.$http.post('/apis/newuser', {
          user: this.user,
          password: this.password,
          email: this.email,
          name: this.name
        }).then((res) => {
          if (res.data.code === 0) {
            this.$router.push({name: 'login'})
          } else if (res.data.code === 1) {
            this.user = ''
            window.alert('此帳號重複')
          }
        })
      } else {
        this.message = true
      }
    },
    changeInputClass (boo) {
      return boo ? 'has-success' : 'has-error'
    },
    changeIconClass (boo) {
      return boo ? 'glyphicon-ok' : 'glyphicon-remove'
    }
  }
}
</script>

<style lang="css">
</style>
