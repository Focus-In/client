<template>
  <div class="home">
    <form @submit.prevent='inputUser'>
      <input type="text" class="form-control" v-model="username">
      <br>
      <button>Let's Go</button>
    </form>
  </div>
</template>

<script>
import io from 'socket.io-client'
const socket = io.connect('http://localhost:3000')

export default {
  name: 'Home',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    inputUser () {
      this.$store.commit('SET_PLAYERS', this.username)
      this.$router.push('/lobby')
      socket.emit('addPlayer', {
        players: this.$store.state.players
      })
    }
  },
  created () {
    socket.on('playerAdded', players => {
      this.$store.commit('SET_CHANGE_PLAYERS', players)
    })
  }

}
</script>

<style scoped>
  .home {
    background-color: blue;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
