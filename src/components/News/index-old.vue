<template lang="html">
  <div class="container-fluid news">
    <div class="row">
      <div class="progress col-lg-6 col-lg-offset-3" v-if="!loading">
        <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" >
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div class="panel panel-primary" v-if="loading">
        <!-- Default panel contents -->
        <div class="panel-heading">技職教育學刊</div>
        <!-- Table -->
        <table class="table table-hover">
          <thead>
            <tr>
              <th width="20%">＃</th>
              <th>期刊文件</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(journal, index) in journals">
              <td><b>{{index + 1}}</b></td>
              <td>
                <a :href="procPath(journal.path)">{{journal.title}}</a>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="row">
          <div class="col-lg-12 text-center">
            <nav aria-label="Page navigation">
              <ul class="pagination">
                <li v-show="page.prev === 0 ? false:true">
                  <a href="#" @click="getJournals(page.prev)" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>

                <li
                v-for="p in page.total"
                :class="p === page.current? 'active':''"
                :key="p">
                  <a href="#" @click.prevent="getJournals(p)">{{p}}</a>
                </li>
                <li v-show="page.current === page.total ? false:true">
                  <a href="#" @click="getJournals(page.next)" aria-label="Next" >
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
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
      loading: false,
      journals: [],
      page: {}
    }
  },
  mounted () {
    this.getJournals(1)
  },
  methods: {
    getJournals (page) {
      this.loading = false
      this.$http.get(`/apis/journal/${page}`)
        .then((result) => {
          this.journals = result.data.journals
          this.page = result.data.page
          this.loading = true
        })
    },
    procPath (path) {
      return `http://www.tve.yuntech.edu.tw:8080/${path.split('/').slice(1).join('/')}`
    }
  }
}
</script>
