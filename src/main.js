import Vue,{ createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueCookies from 'vue-cookies'
// could be using local storage instead too

createApp(App).use(VueCookies, { expire: '7d'}).use(router).mount('#app')


