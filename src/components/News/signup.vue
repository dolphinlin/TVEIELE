<template lang="html">
  <div class="col-lg-4 col-lg-offset-4">
    <form class="contributeForm" method="post">
      <div class="form-group">
        <label for="summary">標題：</label>
        <input type="text" name="title" v-model="title" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="summary">信箱：</label>
        <input type="mail" name="email" v-model="email" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="briefing">檔案：(PDF)</label>
        <input type="file" name="briefing" ref="briefing" accept="application/pdf" required>
      </div>
      <button class="btn btn-primary btn-block" @click.prevent="uploadfile">
        上傳
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      email: ''
    }
  },
  methods: {
    uploadfile () {
      let files1 = this.$refs.briefing.files
      if (!files1) {
        window.alert('請選擇檔案')
      } else {
        if (window.confirm('確定上傳嗎？')) {
          let data = new window.FormData()
          // for single file
          data.append('token', window.localStorage.getItem('userLoginToken'))
          data.append('uploadFile', files1[0])

          data.append('title', this.title)
          data.append('email', this.email)

          this.$http.post('/apis/journal/upload', data).then((res) => {
            if (res.data.success) {
              window.alert('投稿成功')
              this.$router.push({name: 'me'})
            } else {
              window.alert(res.data.msg)
              this.$router.push({name: 'me'})
            }
          }).catch((err) => {
            console.log(err)
          })
        }
      }
    }
  }
}
</script>

<style lang="css">
</style>
