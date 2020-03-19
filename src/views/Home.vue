<template>
  <div class="home">
    <form @submit.prevent='inputUser'>
      <input type="text" class="form-control" v-model="username">
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
// import io from 'socket.io-client'
// const socket = io.connect('http://localhost:3000')

export default {
  name: 'Home',
  data () {
    return {
      username: ''
    }
  }
  // methods: {
  //   inputUser () {
  //     this.$store.commit('SET_PLAYERS', this.username)
  //     socket.emit('addPlayer', {
  //       username: this.username
  //     })
  //   }
  // },
  // created () {
  //   socket.on('playerAdded', payload => {
  //     this.$router.push('/lobby')
  //   })
  // }

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
