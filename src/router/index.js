import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      icon: 'reports'
    },
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    meta: {
      icon: 'dashboard'
    },
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue')
  },
  {
    path: '/quotes',
    name: 'Quotes',
    meta: {
      icon: 'reports'
    },
    component: () => import(/* webpackChunkName: "quotes" */ '../views/Quotes.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
