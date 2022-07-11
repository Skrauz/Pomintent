import { createRouter, createWebHistory } from 'vue-router'
import Timer from '../views/Timer.vue'
import Log from '../views/Home.vue'
import Settings from '../views/Home.vue'
import FaQ from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'timer',
    component: Timer
  },
  {
    path: '/log',
    name: 'log',
    component: Log
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
