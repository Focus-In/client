<template>
    <div class="container">
        <div class="winner-layout">
            <div class="winner-column">
                <div class="winner-image-box">
                    <img src="../assets/winner.png" alt="" class="winner-image">
                </div>
                <div class="winner-result">
                    <div class="card">
                        <div class="card-header">
                            <!-- <h3>Your Score is : {{players[playerOn.id - 1].score}}</h3> -->
                            <h3>Your Score is : {{playerHighScore.score}}</h3>
                        </div>
                        <div class="result">
                            <div class="player-winner">
                            <img src="../assets/user.png" alt="">
                            <!-- <p>{{playerOn.username}}</p> -->
                            <p>{{playerHighScore.username}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="footer-winner">
                        <a @click="deletePlayers" class="btn btn-info" to="/">Back to home</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import io from 'socket.io-client'
// import router from '../router'
const socket = io.connect('http://localhost:3000')

export default {
  name: 'Winner',
  computed: {
    players () {
      return this.$store.state.players
    },
    playerOn () {
      return this.$store.state.player_on
    },
    playerHighScore () {
      return this.$store.state.playerHighScore
    }
  },
  methods: {
    deletePlayers () {
      socket.emit('deletePlayers')
      this.$router.push('/')
    }
  },
  created () {
    socket.on('deletePlayersNih', () => {
      this.$store.commit('SET_CHANGE_PLAYERS', [])
    })
  },
  watch: {
    playerHighScore (val) {
      this.playerHighScore = val
    }
  }
}
</script>
<style>

.winner-layout{
    height: 100vh;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
}

.winner-column{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
}

.winner-image-box{
    width: 70%;
}

.winner-image{
    max-width: 70%;
}

.winner-result{
    padding: 10px;
    width: 100%;
}

.card-header{
    background-color: #186277;
}

.player-winner{
    padding: 10px;
}

.footer-winner{
    padding: 10px;
}

</style>
