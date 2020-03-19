<template>
<div class="container">
    <div v-for="(question, i) in questionList" :key="i" class="play-board">
        <div class="play-board-header">
            <div class="score-user">
                Your Score: 10
            </div>
            <div class="logo">
                <h2>Focus In</h2>
            </div>
            <div class="score-user">
                Another User Score: 10
            </div>
        </div>
        <div class="play-board-body">
            <div class="play-image">
                <!-- <img :src="{{question.imgUrl}}" alt=""> -->
                <img :src="question.imgUrl" alt="">
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
    }
  }
}
</script>

<style>
.play-board{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin-top: 5vh;
}

.play-board-header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 5px;
}

.play-board-header div{
    background-color: aquamarine;
    margin: 5px;
    padding: 5px;
}

.play-board-body{
    height: 70%;
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
