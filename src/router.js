import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import About from './views/About'
import Api from './views/Api'
import Details from './views/Details'
import Login from './views/Login'

Vue.use(Router)

let router = new Router({
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
      component: Api,
      meta: {
        requirestAuth: true
      }
    },
    {
      path: '/details/:id',
      name: 'details',
      component: Details,
      meta: {
        requirestAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requirestAuth)) {
    if (!localStorage.getItem('dummyToken')) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      next()
    }
  } else { next() }
})

export default router

// router.beforeEach((to, from, next) => {
//   if(to.matched.some(record => record.meta.requiresAuth)) {
//       if (localStorage.getItem('jwt') == null) {
//           next({
//               path: '/login',
//               params: { nextUrl: to.fullPath }
//           })
//       } else {
//           let user = JSON.parse(localStorage.getItem('user'))
//           if(to.matched.some(record => record.meta.is_admin)) {
//               if(user.is_admin == 1){
//                   next()
//               }
//               else{
//                   next({ name: 'userboard'})
//               }
//           }else {
//               next()
//           }
//       }
//   } else if(to.matched.some(record => record.meta.guest)) {
//       if(localStorage.getItem('jwt') == null){
//           next()
//       }
//       else{
//           next({ name: 'userboard'})
//       }
//   }else {
//       next() 
//   }
// })
