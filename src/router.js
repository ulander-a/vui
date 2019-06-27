import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import About from './views/About'
import Api from './views/Api'
import Details from './views/Details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/api',
      name: 'api',
      component: Api
    },
    {
      path: '/details/:id',
      name: 'details',
      component: Details,
    }
  ]
})
