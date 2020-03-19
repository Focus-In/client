<template>
  <div class="about">
    {{players}}
  </div>
</template>

<script>
export default {
  name: 'Loby',
  computed: {
    players () {
      return this.$store.state.players
    }
  }
}
</script>

<style scoped>

</style>
