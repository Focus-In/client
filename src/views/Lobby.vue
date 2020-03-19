<template>
  <div class="about">
    <div v-if="showNotif">
      {{notif_player_join}}
    </div>
    {{players}}
  </div>
</template>

<script>
import io from 'socket.io-client'
const socket = io.connect('http://localhost:3000')

export default {
  name: 'Loby',
  data () {
    return {
      notif_player_join: '',
      showNotif: false
    }
  },
  computed: {
    players () {
      return this.$store.state.players
    }
    // notif_player_join () {
    //   return this.$store.state.notif_player_join
    // }
  },
  methods: {
    notify () {
      this.showNotif = true
      setTimeout(() => {
        this.showNotif = false
      }, 3000)
    }
  },
  created () {
    const audio = new Audio('https://soundimage.org/wp-content/uploads/2014/08/Netherplace.mp3')
    audio.play()
    // this.notify()
    socket.on('notifJoined', playerJoin => {
      // this.$store.commit('SET_NOTIF_PLAYER_JOIN', playerJoin)
      this.notif_player_join = playerJoin
      this.notify()
    })
  }
}
</script>

<style scoped>

</style>
