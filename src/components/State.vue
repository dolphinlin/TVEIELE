<template lang="html">
  <div>
    <p>Now count - </p>
    <button type="button" @click="increment">+</button>
    <button type="button" @click="decrement">-</button>
    <p>
      <button type="button" @click="ansycIncrement">Ansyc +</button>
    </p>
  </div>
</template>

<script>
import * as types from '../store/mutations_types'

export default {
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    increment () {
      this.$store.commit(types.INCREMENT_COUNT)
    },
    decrement () {
      this.$store.commit(types.DECREMENT_COUNT)
    },
    ansycIncrement () {
      this.$store.dispatch('increment')
    }
  }
}
</script>

<style lang="css">
</style>
