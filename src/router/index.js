import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/work',
    name: 'work',
    component: () => import(/* webpackChunkName: "work" */ '../views/WorkView.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/ShopView.vue')
  },
  {
    path: '/travel',
    name: 'travel',
    component: () => import(/* webpackChunkName: "travel" */ '../views/TravelView.vue')
  },
  {
    path: '/awards',
    name: 'awards',
    component: () => import(/* webpackChunkName: "awards" */ '../views/AwardsView.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import(/* webpackChunkName: "shop" */ '../views/SettingsView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
