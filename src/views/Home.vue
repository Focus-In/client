<template>
<div class="container">
  <lottie-player
    v-if="loading"
    src="https://assets1.lottiefiles.com/private_files/lf30_eAstu1.json"
    background="transparent"
    speed="1"
    style="width: 300px; height: 300px;"
    loop
    autoplay >
  </lottie-player>

  <div v-if="!loading" class="home container">
    <div class="form-lobby">
      <img src="../assets/logo-text.png" alt="">
      <p>play and test your FOCUS together with your friends</p>
      <form @submit.prevent='inputUser'>
      <input type="text" class="form-control" v-model="username" placeholder="Your Name">
      <br>
      <button @click.prevent="startLoad" type="submit" class="btn btn-info">Let's Go</button>
    </form>
    </div>
    <div class="image-lobby">
      <img src="../assets/landing.png" alt="">
    </div>
  </div>
</div>
</template>

<script>
import io from 'socket.io-client'
const socket = io.connect('http://localhost:3000')

export default {
  name: 'Home',
  data () {
    return {
      username: '',
      loading: false
    }
  },
  methods: {
    startLoad () {
      console.log('munculah')
      this.loading = true
      setTimeout(() => {
        this.inputUser()
      }, 3000)
    },
    inputUser () {
      this.loading = false
      this.$store.commit('SET_PLAYERS', this.username)
      this.$store.commit('SET_PLAYER', this.username)
      this.$router.push('/lobby')
      socket.emit('addPlayer', {
        players: this.$store.state.players,
        player: this.$store.state.player
      })
    }
  },
  created () {
    // const audio = new Audio('https://soundimage.org/wp-content/uploads/2014/08/Netherplace.mp3')
    // audio.play()
    socket.on('playerAdded', players => {
      this.$store.commit('SET_CHANGE_PLAYERS', players)
    })
  }
  // beforeRouteEnter (to, from, next) {
  //   // console.log(this.username)
  //   if (this.username) {
  //     next('/lobby')
  //   } else {
  //     next('/')
  //   }
  // }
}
</script>

<style scoped>
.home {
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    align-items: center;
    align-content: center;
    height: 100vh;
  }
  @media (max-width: 768px) {
    .home {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    /* align-content: center; */
  }

  .image-lobby{
    display: none;
  }
  }
</style>
