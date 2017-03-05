<template lang="html">
  <div class="container">
    <p>
      <h1>
        帳號已登出
      </h1>
    </p>
  </div>
</template>

<script>
import * as types from '../../store/mutations_types'

export default {
  mounted () {
    this.logout()
  },
  methods: {
    logout () {
      window.localStorage.removeItem('userLoginTokend')
      this.$store.commit(types.USER_LOGOUT)
    }
  }
}
</script>

<style lang="css">
</style>
