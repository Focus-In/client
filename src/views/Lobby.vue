<template>
  <div class="lobby">
    <div class="overflow-auto receptionis">
      <div v-if="showNotif">
        {{notif_player_join}}
      </div>
       <div v-for="(player, index) in players" :key="index">
         {{players[index].username}}
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
      console.log(id, '?????????')
      const par = this.players
      console.log(par, 'INI DI PLAY GAME AAA')
      this.$store.commit('SET_PLAYER_ON', par.find(user => user.id === +id))
      // for (let i = 0; i < par.length; i++) {
      //   console.log(par[i], 'PPPPPPPPPPPPPPP')
      //   console.log(par[i].id, id, 'kkkkkkkkkkk')
      //   if (par[i].id === +id) {
      //     console.log(par[i], 'INI DI PLAY GAME')
      //     this.$store.commit('SET_PLAYER_ON', par[i])
      //     break
      //   }
      // }
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
}

.receptionis {
  height: 20vh;
  background-color: azure;
}

</style>
