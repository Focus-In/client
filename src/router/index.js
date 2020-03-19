import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Lobby from '../views/Lobby.vue'
import PlayGame from '../views/PlayGame.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lobby',
    name: 'lobby',
    component: Lobby
  },
  {
    path: '/playgame',
    name: 'PlayGame',
    component: PlayGame
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
