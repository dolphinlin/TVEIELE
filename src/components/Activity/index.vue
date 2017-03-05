<template lang="html">
  <div class="container-fluid">
    <div class="row">
      <div class="progress col-lg-6 col-lg-offset-3" v-if="!loading">
        <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" >
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div class="panel panel-primary" v-if="loading">
        <!-- Default panel contents -->
        <div class="panel-heading">活動公告 - <strong>{{title}}</strong></div>
        <div class="panel-body">
          <p v-html="content">
          </p>
        </div>
        <!-- Table -->
        <table class="table table-hover">
          <thead>
            <tr>
              <th width="20%">＃</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>主辦單位</b></td>
              <td>{{organizer}}</td>
            </tr>
            <tr>
              <td><b>協辦單位</b></td>
              <td>{{coorganizer}}</td>
            </tr>
            <tr>
              <td><b>活動時間</b></td>
              <td>{{date}}</td>
            </tr>
            <tr>
              <td><b>活動地點</b></td>
              <td>{{place}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      date: Date.now(),
      organizer: '',
      coorganizer: '',
      place: '',
      content: '',
      loading: false,
      error: false
    }
  },
  mounted () {
    this.getAct()
  },
  methods: {
    getAct () {
      this.$http.get('/apis/activities')
        .then((res) => {
          let {title, date, organizer, coorganizer, place, content} = res.data.data
          this.title = title
          this.date = date
          this.organizer = organizer
          this.coorganizer = coorganizer
          this.place = place
          this.content = content
          this.loading = true
        })
        .catch((err) => {
          console.log(err)
          this.error = true
        })
    }
  }
}
</script>

<style lang="css">
</style>
