import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Overview.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/info',
      name: 'Info',
      // route level code-splitting
      component: () => import(/* webpackChunkName: "info" */ './views/Info.vue')
    },
    {
      path: '/donations',
      name: 'Donations',
      // route level code-splitting
      component: () => import(/* webpackChunkName: "donations" */ './views/Donations.vue')
    }
  ]
})
