<template>
  <div class="lobby d-flex flex-column align-items-center">
    <div class="overflow-auto receptionis">
      <div v-if="showNotif">
        {{notif_player_join}}
      </div>
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
    socket.on('notifJoined', playerJoin => {
      this.notif_player_join = playerJoin
      this.notify()
    })
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
