<template>
  <div class="lobby d-flex flex-column align-items-center">
    <div class="overflow-auto receptionis">
       <div>
         {{players}}
       </div>
    </div>
    <div>
       <router-link to="/playgame">
        <button>Start</button>
       </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loby',
  computed: {
    players () {
      return this.$store.state.players.username
    }
  },
  created () {
    const audio = new Audio('https://soundimage.org/wp-content/uploads/2014/08/Netherplace.mp3')
    audio.play()
  }
}
</script>

<style scoped>

.receptionis {
  width: 30vw;
  height: 20vh;
  background-color: azure;
}

</style>
