<template lang="html">
  <div class="container-fluid me">
    <div class="page-header">
      <h1>
        報名活動
      </h1>
    </div>
    <p>
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <td>#</td>
            <td>活動名稱</td>
            <td>報名姓名</td>
            <td>聯絡電話</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(act, index) in acts">
            <td>{{index + 1}}</td>
            <td>{{act.title}}</td>
            <td>{{act.name}}</td>
            <td>{{act.phone}}</td>
          </tr>
        </tbody>
      </table>
    </p>
    <div class="page-header">
      <h1>
        活動投稿
      </h1>
    </div>
    <p>
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <td>#</td>
            <td>評論</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(con, index) in cons">
            <td>{{con.title}}</td>
            <td>{{con.comment}}</td>
          </tr>
        </tbody>
      </table>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      acts: [],
      cons: []
    }
  },
  mounted () {
    this.getME()
  },
  methods: {
    getME () {
      this.$http.post('/apis/me', {
        token: window.localStorage.getItem('userLoginToken'),
        id: this.$store.state.userInfo.id,
        name: this.$store.state.userInfo.name
      })
        .then((res) => {
          this.acts = res.data.data.acts
          // this.cons = res.data.data.cons
        })
    }
  }
}
</script>

<style lang="css">
</style>
