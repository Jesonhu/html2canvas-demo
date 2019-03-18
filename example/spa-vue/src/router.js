import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/home/index')
    },
    {
      path: '/html2canvas',
      name: 'html2canvas',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/html2canvas/index')
    },

    {
      path: '/',
      redirect: '/home'
    }
  ]
})
