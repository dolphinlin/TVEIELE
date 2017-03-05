import Vuex from 'vuex'
import Vue from 'vue'

import * as types from './mutations_types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    userInfo: {
      logined: false,
      id: 0,
      name: ''
    }
  },
  mutations: {
    [types.INCREMENT_COUNT] (state) {
      state.count ++
    },
    [types.DECREMENT_COUNT] (state) {
      state.count --
    },
    [types.USER_LOGIN] (state, payload) {
      state.userInfo.logined = true
      state.userInfo.id = payload.userId
      state.userInfo.name = payload.userName
    },
    [types.USER_LOGOUT] (state) {
      window.localStorage.removeItem('userLoginToken')
      state.userInfo.logined = false
      state.userInfo.id = 0
    }
  },
  actions: {
    increment ({commit, state}) {
      setTimeout(function () {
        commit(types.INCREMENT_COUNT)
      }, 1000)
    }
  }
})
