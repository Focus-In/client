import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: []
  },
  mutations: {
    SET_PLAYERS (state, payload) {
      state.players.push(payload)
    },
    SET_CHANGE_PLAYERS (state, payload) {
      state.players = payload
    }
  },
  actions: {

  },
  modules: {
  }
})
