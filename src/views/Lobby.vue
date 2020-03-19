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
  },
  created () {
    const audio = new Audio('https://soundimage.org/wp-content/uploads/2014/08/Netherplace.mp3')
    audio.play()
  }
}
</script>

<style scoped>

</style>
