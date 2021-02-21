import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "about" */ './views/Register.vue')

    }
  ]
})
