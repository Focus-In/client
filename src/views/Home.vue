<template>
  <div class="home">
    <form @submit.prevent='inputUser' class="form-group">
      <div class="container">
         <input type="text" class="form-control" v-model="username">
         <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import io from 'socket.io-client'
// const socket = io.connect('http://localhost:3000')

export default {
  name: 'Home',
  data () {
    return {
      username: '',
      socket: {}
    }
  },
  methods: {
    inputUser () {
      this.$store.commit('SET_PLAYERS', this.username)
      this.socket.emit('addPlayer', {
        username: this.username
      })
    }
  },
  created () {
    this.socket = io.connect('http://localhost:3000')
    const audio = new Audio('https://soundimage.org/wp-content/uploads/2014/08/Netherplace.mp3')
    audio.play()
  },
  mounted () {
    this.socket.on('playerAdded', payload => {
      this.$router.push('/lobby')
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
