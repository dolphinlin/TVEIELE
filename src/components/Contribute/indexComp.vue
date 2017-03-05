<template lang="html">
  <div class="col-lg-4 col-lg-offset-4">
    <p>
      <button type="button" class="btn btn-warning btn-block" @click="Signup">我要投稿</button>
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    Signup () {
      this.$router.push({name: 'contributeSignup'})
    }
  }
}
</script>

<style lang="css">
</style>
