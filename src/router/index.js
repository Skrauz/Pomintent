import { createRouter, createWebHistory } from 'vue-router'
import Timer from '../views/Timer.vue'
import Page404 from '../views/404.vue'


const routes = [
  {
    path: '/',
    name: 'timer',
    component: Timer
  },
  { path: '/404', component: Page404 },  
  { path: '/:pathMatch(.*)*', redirect: '/404' },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
