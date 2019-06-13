import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import About from './views/About'
import Data from './views/Data'
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
      path: '/data',
      name: 'data',
      component: Data
    },
    {
      path: '/details/:id',
      name: 'details',
      component: Details
    }
  ]
})
