<template lang="html">
  <div class="container-fluid index">
    <div class="row">
      <div class="col-lg-8">
        <div class="start">
          <div class="page-header">
            <h1>
              <span class="glyphicon glyphicon-user text-info" aria-hidden="true"></span> <small class="text-info">投稿對象</small>
            </h1>
          </div>
          <blockquote>
            <p>
              廣邀國內技職教育之學者、專家,徵求學術論文。
            </p>
          </blockquote>
        </div>
        <div class="place">
          <div class="page-header">
            <h1>
              <span class="glyphicon glyphicon-comment text-info" aria-hidden="true"></span> <small class="text-info">投稿內容</small>
            </h1>
          </div>
          <blockquote>
            <p>
              論文摘要字數限制在 500 字以內,主要內容包括:研究目的、研究方法、重要結論與建議等。
            </p>
          </blockquote>
        </div>
        <div class="topic">
          <div class="page-header">
            <h1>
              <span class="glyphicon glyphicon-screenshot text-info" aria-hidden="true"></span> <small class="text-info">投稿標準</small>
            </h1>
          </div>
          <blockquote>
            <p>
              <span class="glyphicon glyphicon-chevron-right text-success" aria-hidden="true"></span> 題目
              <br>
              <span class="glyphicon glyphicon-chevron-right text-success" aria-hidden="true"></span> 作者、服務單位及電子郵件
              <br>
              <span class="glyphicon glyphicon-chevron-right text-success" aria-hidden="true"></span> 摘要與關鍵字
              <br>
              <span class="glyphicon glyphicon-chevron-right text-success" aria-hidden="true"></span> 緒論
              <br>
              <span class="glyphicon glyphicon-chevron-right text-success" aria-hidden="true"></span> 方法
              <br>
              <span class="glyphicon glyphicon-chevron-right text-success" aria-hidden="true"></span> 結果
              <br>
              <span class="glyphicon glyphicon-chevron-right text-success" aria-hidden="true"></span> 討論
              <br>
              <span class="glyphicon glyphicon-chevron-right text-success" aria-hidden="true"></span> 參考文獻
              <br>
              <span class="glyphicon glyphicon-chevron-right text-success" aria-hidden="true"></span> 聯絡作者與電話
              <br>
              (論文格式請參考 <a href="http://www.tve.yuntech.edu.tw:8080/file/format.pdf">附件1</a> ,以 APA 第 6 版之寫作格式)。
            </p>
          </blockquote>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="panel panel-warning">
          <div class="panel-heading">
            <h2 class="panel-title">
              <span class="glyphicon glyphicon-volume-up" aria-hidden="true" style="font-size: 20px"></span> 重要日期
            </h3>
          </div>
          <div class="panel-body">
            <div class="item" v-for="i in notic">
              <span class="glyphicon glyphicon-chevron-right text-danger" aria-hidden="true"></span> {{i}}
              <br>
            </div>
          </div>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      notic: []
    }
  },
  mounted () {
    this.loading = true
    this.getInfo()
  },
  methods: {
    getInfo () {
      this.$http.get('/apis/info')
        .then((result) => {
          let {notic} = result.data.data

          this.notic = notic
        })
    }
  }
}
</script>

<style lang="css">
</style>
