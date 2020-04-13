import Vue from 'vue'
import { AppPlugin } from '@agri-apps-us/app-ui'
import App from './App.vue'
import router from './router'
import store from './store'

import '@agri-apps-us/app-ui/dist/agriAppsUI.css'
import './assets/css/main.css'

Vue.config.productionTip = false
Vue.use(AppPlugin);
const storeName = 'app-starter';

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    this.$store.dispatch('initializeStore', 
      JSON.parse(localStorage.getItem(storeName)) || {});
  }
}).$mount('#app')
