<template lang="html">
  <div class="container-fluid index">
    <div class="row">
      <div class="col-lg-8">
        <div class="start">
          <div class="page-header">
            <h1>
              <span class="glyphicon glyphicon-comment text-info" aria-hidden="true"></span> <small class="text-info">緣起</small>
            </h1>
          </div>
          <blockquote>
            <p>
              {{origin}}
            </p>
          </blockquote>
        </div>
        <div class="place">
          <div class="page-header">
            <h1>
              <span class="glyphicon glyphicon-calendar text-info" aria-hidden="true"></span> <small class="text-info">舉辦日期與地點</small>
            </h1>
          </div>
          <blockquote>
            <p>
              {{date}}
            </p>
          </blockquote>
        </div>
        <div class="topic">
          <div class="page-header">
            <h1>
              <span class="glyphicon glyphicon-screenshot text-info" aria-hidden="true"></span> <small class="text-info">徵稿主題</small>
            </h1>
          </div>
          <blockquote>
            <p class="item" v-for="i in topic">
              <span class="glyphicon glyphicon-chevron-right text-success" aria-hidden="true"></span> {{i}}
              <br>
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
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      origin: '',
      topic: [],
      date: '',
      notic: []
    }
  },
  mounted () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      this.$http.get('/apis/info')
        .then((result) => {
          let {origin, topic, date, notic} = result.data.data

          this.origin = origin
          this.topic = topic
          this.date = date
          this.notic = notic
        })
    }
  }
}
</script>

<style lang="css">
</style>
