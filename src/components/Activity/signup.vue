<template lang="html">
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12" v-if="message">
        <div class="alert alert-danger" role="alert">
          <strong>錯誤!</strong> 請詳細填寫資料
        </div>
      </div>

      <div class="col-lg-6 col-lg-offset-3">
        <div class="panel panel-warning text-center">
          <div class="panel-heading">
            <h3 class="panel-title">
              報名
            </h3>
          </div>
          <div class="panel-body">
            <form>
              <div class="form-group">
                <label class="sr-only" for="name">姓名</label>
                <input type="text" class="form-control" id="name" placeholder="姓名" v-model="name" required>
              </div>
              <div class="form-group">
                <label class="sr-only" for="ic">身分證字號（登錄研習時數用）</label>
                <input type="text" class="form-control" id="ic" placeholder="身分證字號（登錄研習時數用）" v-model="ic" required>
              </div>
              <div class="form-group">
                <label class="sr-only" for="phone">聯絡電話</label>
                <input type="phone" class="form-control" id="phone" placeholder="聯絡電話" v-model="phone" required>
              </div>
              <div class="form-group">
                <label class="sr-only" for="email">聯絡信箱</label>
                <input type="mail" class="form-control" id="email" placeholder="聯絡信箱" v-model="email" required>
              </div>
              <div class="form-group">
                <label class="sr-only" for="unit">服務單位</label>
                <input type="text" class="form-control" id="unit" placeholder="服務單位" v-model="unit" required>
              </div>
              <div class="form-group">
                <p>
                  餐點葷素
                </p>
                <div class="radio">
                  <label>
                    <input type="radio" name="food1" id="food1" value="0" v-model="food">
                    葷食
                  </label>
                  <label>
                    <input type="radio" name="food2" id="food2" value="1" v-model="food">
                    素食
                  </label>
                </div>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-success" @click.prevent="userSignup">報名</button>
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
  data () {
    return {
      name: '',
      ic: '',
      phone: '',
      email: '',
      food: 0,
      unit: '',
      message: false
    }
  },
  mounted () {
    this.name = this.$store.state.userInfo.name
  },
  computed: {
    id () {
      return this.$store.state.userInfo.id
    },
    checkName () {
      return this.name.length !== 0
    },
    checkIC () {
      return this.ic.length !== 0
    },
    checkEMail () {
      return this.email.length !== 0
    },
    checkPhone () {
      return this.phone.length !== 0
    }
  },
  methods: {
    userSignup () {
      if (this.checkName && this.checkIC && this.checkEMail && this.checkPhone) {
        this.$http.post('/apis/activities/signup', {
          token: window.localStorage.getItem('userLoginToken'),
          id: this.id,
          name: this.name,
          ic: this.ic,
          phone: this.phone,
          email: this.email,
          food: this.food,
          unit: this.unit
        }).then((res) => {
          if (res.data.success) {
            window.alert('報名成功！')
            this.$router.push({name: 'me'})
          } else {
            window.alert('報名發生錯誤')
            this.$router.push({name: 'me'})
          }
        })
      } else {
        this.message = true
      }
    }
  }
}
</script>

<style lang="css">
</style>
