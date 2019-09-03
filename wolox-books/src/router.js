import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import(/* webpackChunkName: "sign-up" */ './views/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')

    }
  ]
})
