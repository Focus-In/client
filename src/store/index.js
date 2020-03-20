import Vue from 'vue'
import Vuex from 'vuex'
import io from 'socket.io-client'
const socket = io.connect('http://localhost:3000')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    player: '',
    players: [],
    notif_player_join: '',
    player_on: '',
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
      const id = state.players.length + 1
      localStorage.id = id
      localStorage.username = payload
      localStorage.score = 0
      state.players.push({ id: id, username: payload, score: 0 })
    },
    SET_CHANGE_PLAYERS (state, payload) {
      state.players = payload
    },
    SET_SCORE (state, payload) {
      state.players[payload.index].score += 10
    },
    SET_NOTIF_PLAYER_JOIN (state, payload) {
      state.notif_player_join = payload
    },
    SET_PLAYER_ON (state, payload) {
      state.player_on = payload
    }
  },
  actions: {
    checkAnswer ({ dispatch, commit, state }, { answer, questionNumber }) {
      const questions = state.questionList
      for (let index = 0; index < questions.length; index++) {
        if (questions[index].id === questionNumber) {
          if (questions[index].answer === answer) {
            commit('SET_SCORE', { index: state.player_on.id - 1, status: true })
            // console.log('you got a point', state.players[0].username, state.players[0].score)
            console.log('you got a point', state.players[localStorage.id - 1].username, state.players[localStorage.id - 1].score)
          } else {
            console.log('you gotta need to be focus!')
          }
          socket.emit('updateScore', state.players[state.player_on.id - 1])
        }
      }
    }
  },
  modules: {
  }
})
