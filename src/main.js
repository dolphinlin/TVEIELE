import Vue from 'vue'
import VueRouter from 'vue-router'
import Axios from 'axios'

import store from './store'
import routes from './routes'
import App from './App'

import * as types from './store/mutations_types'

Axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http://www.tve.yuntech.edu.tw:8080' : 'http://localhost:3000'

Vue.prototype.$http = Axios
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (window.localStorage.getItem('userLoginToken')) {
      Axios.post('/apis/testToken', {
        token: window.localStorage.getItem('userLoginToken')
      }).then((res) => {
        if (res.data.code === 'ok') {
          store.commit(types.USER_LOGIN, {
            userId: res.data.userId,
            userName: res.data.userName
          })
          next()
        } else {
          store.commit(types.USER_LOGOUT)
          next({
            path: '/login',
            query: { redirect: to.fullPath }
          })
        }
      }).catch((err) => {
        store.commit(types.USER_LOGOUT)
        console.log(err)
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      })
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
