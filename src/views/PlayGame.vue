<template>
<div class="container">
    <div>
        Hallo {{playerOn.username}}
    </div>
    <div v-for="(question) in questionList" :key="question.id" class="play-board">
        <div class="play-board-header">
            <div class="score-user">
                <span>Your score : {{players[playerOn.id - 1].score}}</span>
            </div>
            <div class="logo">
                <img src="../assets//logo-text.png" alt="" class="logo-playgame">
            </div>
            <div class="score-user">
                Another User Score: 0
            </div>
        </div>
        <div class="play-board-body">
            <div class="play-image">
                <!-- <img :src="{{question.imgUrl}}" alt=""> -->
                <img :src="question.imgUrl" alt="" class="responsive">
            </div>
            <div class="play-board-button">
                <div class="left">
                <button @click.prevent="getAnswer('A', question.id)" type="button" class="btn btn-dark" value="A"> A
                </button>
                </div>
                <div class="right">
                <button @click.prevent="getAnswer('B', question.id)" type="button" class="btn btn-dark" value="B">
                    B
                </button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'PlayBoard',
  methods: {
    ...mapActions(['checkAnswer']),
    getAnswer (answer, questionNumber) {
    //   console.log('get answer', answer, questionNumber)
      this.checkAnswer({ answer, questionNumber })
    }
  },
  computed: {
    questionList () {
      return this.$store.state.questionList
    },
    players () {
      return this.$store.state.players
    },
    playerOn () {
      return this.$store.state.player_on
    }
  },
  created () {
    console.log(localStorage.id)
    console.log(localStorage.username)
    console.log(this.$store.state.player_on)
  }
}
</script>

<style>
.play-board{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}

.play-board-header{
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 5px;
}

.score-user{
    margin: 15px 15px;
    width: 10vw;
    height: auto;
    background-color: black;
    color: whitesmoke;
}

.play-board-body{
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}

.play-image{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
}

.responsive{
  max-width: 40vw;
  height: auto;
}

.logo-playgame{
    width: 100%;
    height: 100%;
}

.play-board-button{
    margin: 10px;
    display: flex;
    justify-content: center;
    align-content: center;
}

.play-board-button div{
    margin: 10px;
    width: 10vw;
    height: 10vh;
}

.play-board-button button{
    width: 100%;
    height: 100%;
}

</style>
