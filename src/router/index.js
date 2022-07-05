import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Timer from '../views/Timer.vue'
import Stats from '../views/Home.vue'
import Settings from '../views/Home.vue'
import Credits from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/timer',
    name: 'timer',
    component: Timer
  },
  {
    path: '/stats',
    name: 'stats',
    component: Stats
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings
  },
  {
    path: '/credits',
    name: 'credits',
    component: Credits
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
