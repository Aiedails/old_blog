import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/archives',
    name: 'Archives',
    component: () => import(/* webpackChunkName: "about" */ '../views/Archives.vue')
  },
  {
    path: '/record/arch.log',
    name: 'arch.log',
    component: () => import(/* webpackChunkName: "about" */ '../files/arch.vue')
  },
  {
    path: '/record/igemwiki.log',
    name: 'igemwiki.log',
    component: () => import(/* webpackChunkName: "about" */ '../files/igemwiki.vue')
  },
  {
    path: '/essay/star',
    name: 'star',
    component: () => import(/* webpackChunkName: "about" */ '../files/star.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
