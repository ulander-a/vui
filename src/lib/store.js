import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    meta: {
      theme: 'dark'
    },
    alert: {
      type: null,
      show: false,
      content: ''
    },
    user: {
      authenticated: false,
      username: null
    }
  },
  mutations: {
    setAlert(state, payload) {
      state.alert = {
        type: payload.type,
        show: payload.show,
        content: payload.content
      }
    },
    authenticate(state, payload) {
      state.user = {
        authenticated: true,
        username: payload.username
      }
    },
    logout(state) {
      state.user = {
        authenticated: false,
        username: null
      }
    }
  }
})