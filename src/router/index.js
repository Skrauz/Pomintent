import { createRouter, createWebHistory } from 'vue-router'
import Timer from '../views/Timer.vue'
import Stats from '../views/Home.vue'
import Settings from '../views/Home.vue'
import FaQ from '../views/Home.vue'

const routes = [
  {
    path: '/',
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
    path: '/faq',
    name: 'faq',
    component: FaQ
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
