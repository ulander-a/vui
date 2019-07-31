import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    message: {
      type: null,
      show: false,
      body: ''
    },
    user: {
      authenticated: false,
      username: ''
    }
  },
  mutations: {
    setMessage(state, payload) {
      state.message = {
        type: payload.type,
        show: payload.show,
        body: payload.body
      }
    }
  }
})