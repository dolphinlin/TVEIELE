<template lang="html">
  <div class="col-lg-4 col-lg-offset-4">
    <form class="contributeForm" method="post">
      <div class="form-group">
        <label for="summary">摘要：</label>
        <input type="file" name="summary" ref="summary" required>
      </div>
      <div class="form-group">
        <label for="content">全文：</label>
        <input type="file" name="content" ref="content" required>
      </div>
      <div class="form-group">
        <label for="briefing">簡報檔或海報內容(1頁A4)：</label>
        <input type="file" name="briefing" ref="briefing" accept="application/vnd.ms-powerpoint,application/pdf" required>
      </div>
      <button class="btn btn-primary btn-block" @click.prevent="uploadfile">
        上傳
      </button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    uploadfile () {
      let files1 = this.$refs.summary.files
      let files2 = this.$refs.content.files
      let files3 = this.$refs.briefing.files
      if (!files1 && !files2 && !files3) {
        window.alert('請選擇檔案')
      } else {
        if (window.confirm('確定上傳嗎？')) {
          let data = new window.FormData()
          // for single file
          data.append('token', window.localStorage.getItem('userLoginToken'))
          data.append('uploadFile1', files1[0])
          data.append('uploadFile2', files2[0])
          data.append('uploadFile3', files3[0])

          data.append('id', this.$store.state.userInfo.id)

          this.$http.post('/apis/uploadFile', data).then((res) => {
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
