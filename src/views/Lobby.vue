<template>
  <div class="lobby">
    <div class="lobby-header">
    <img src="../assets/logo-text.png" alt="">
    <h2>Waiting Room</h2>
    <div v-if="showNotif">
        {{notif_player_join}}
      </div>
    </div>
    <div class="box-lobby">
    <div class="receptionis rounded-lg">
       <div v-for="(player, index) in players" :key="index" class="box-player">
         <img src="../assets/user.png" alt="">
         {{players[index].username}}
       </div>
    </div>
    </div>
    <div>
       <a @click="startOn">
        <button type="button" class="btn btn-info">Play Now</button>
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
    },
    fetchOnePlayer (id) {
      const par = this.players
      this.$store.commit('SET_PLAYER_ON', par.find(user => user.id === +id))
    }
  },
  created () {
    // const audio = new Audio('https://soundimage.org/wp-content/uploads/2014/08/Netherplace.mp3')
    // audio.play()
    this.emitSocket()
    socket.on('notifJoined', playerJoin => {
      this.notif_player_join = playerJoin
      this.notify()
    })
    socket.on('movePlayGamePage', () => {
      this.fetchOnePlayer(localStorage.id)
      this.$router.push('/playgame')
    })
  }
}
</script>

<style scoped>

.lobby{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.box-lobby{
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.receptionis {
  width: 100%;
  background-color: #17A2B8;
  display: flex;
  justify-content: center;
  padding: 5px;
}

.box-player{
  display: flex;
  flex-direction: column;
  color: black;
  margin: 5px;
}

</style>
