<template>
  <div class="lobby d-flex flex-column align-items-center">
    <div class="overflow-auto receptionis">
      <div v-if="showNotif">
        {{notif_player_join}}
      </div>
       <!-- <div>
         {{players}}
       </div> -->
    </div>
    <div>
       <a @click="startOn">
        <button>Start</button>
       </a>
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
    },
    emitSocket () {
      socket.emit('addPlayer', {
        players: this.$store.state.players,
        player: this.$store.state.player
      })
    },
    startOn () {
      socket.emit('startOn')
    }
  },
  created () {
    const audio = new Audio('https://soundimage.org/wp-content/uploads/2014/08/Netherplace.mp3')
    audio.play()
    this.emitSocket()
    socket.on('notifJoined', playerJoin => {
      this.notif_player_join = playerJoin
      this.notify()
    })
    socket.on('movePlayGamePage', () => {
      this.$router.push('/playgame')
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
