import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    player: '',
    players: [],
    notif_player_join: '',
    questionList: [
      { id: 1, imgUrl: 'https://imgur.com/8LwmVol.png', answer: 'A' },
      { id: 2, imgUrl: 'https://i.imgur.com/kGWNeCF.png', answer: 'B' },
      { id: 3, imgUrl: 'https://i.imgur.com/cpXRIT0.png', answer: 'A' },
      { id: 4, imgUrl: 'https://i.imgur.com/msydAto.png', answer: 'B' },
      { id: 5, imgUrl: 'https://i.imgur.com/jNs7ezD.png', answer: 'A' },
      { id: 6, imgUrl: 'https://i.imgur.com/wLgWVzY.png', answer: 'A' },
      { id: 7, imgUrl: 'https://i.imgur.com/KeEsGiA.png', answer: 'A' },
      { id: 8, imgUrl: 'https://i.imgur.com/uYRToKq.png', answer: 'A' },
      { id: 9, imgUrl: 'https://i.imgur.com/JGlBVF6.png', answer: 'B' },
      { id: 10, imgUrl: 'https://i.imgur.com/XdeCJZd.png', answer: 'A' }
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
    SET_SCORE (state, payload) {
      state.players.score += 10
      // console.log(state.players)
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
            console.log('you got a point', state.players, state.players)
            commit('SET_SCORE')
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
