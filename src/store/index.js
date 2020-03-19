import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    player: '',
    players: [],
    notif_player_join: ''
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

  },
  modules: {
  }
})
