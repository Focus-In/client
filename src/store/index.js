import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    player: '',
    players: [],
    notif_player_join: '',
    questionList: [
      { id: 1, imgUrl: 'https://hackernoon.com/hn-images/1*GuuDpW8KefKQDcUW5NtgGA.png', answer: 'B' },
      { id: 2, imgUrl: 'src/assets/soal/soal3.svg', answer: 'A' },
      { id: 3, imgUrl: 'src/assets/soal/soal3.svg', answer: 'B' },
      { id: 4, imgUrl: 'src/assets/soal/soal3.svg', answer: 'B' },
      { id: 5, imgUrl: 'src/assets/soal/soal3.svg', answer: 'B' },
      { id: 6, imgUrl: 'src/assets/soal/soal3.svg', answer: 'B' },
      { id: 7, imgUrl: 'src/assets/soal/soal3.svg', answer: 'A' },
      { id: 8, imgUrl: 'src/assets/soal/soal3.svg', answer: 'A' },
      { id: 9, imgUrl: 'src/assets/soal/soal3.svg', answer: 'A' },
      { id: 10, imgUrl: 'src/assets/soal/soal3.svg', answer: 'A' }
    ]
  },
  mutations: {
    SET_PLAYER (state, payload) {
      state.player = payload
    },
    SET_PLAYERS (state, payload) {
      state.players.push({ username: payload, score: 0 })
    },
    SET_CHANGE_PLAYERS (state, payload) {
      state.players = payload
    },
    SET_NOTIF_PLAYER_JOIN (state, payload) {
      state.notif_player_join = payload
    }
  },
  actions: {
    checkAnswer ({ dispatch, commit, state }, { answer, questionNumber }) {
      const questions = state.questionList
      for (let index = 0; index < questions.length; index++) {
        if (questions[index].id === questionNumber) {
          if (questions[index].answer === answer) {
            console.log('you got a point')
          } else {
            console.log('you gotta need to be focus!')
          }
        }
      }
    }
  },
  modules: {
  }
})
