import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    env: process.env
  },
  getters: {
    appBuild: (state) => {
      return state.env.NODE_ENV === 'development' ? 'dev' : state.env.NODE_ENV === 'production' ? 'build' : 'weird'
    },
    appVersion: (state) => {
      return state.env.VERSION
    },
    quote: () => {
      return {
        quote: 'CREDE UR THE BEST HOMIE',
        author: 'YoUngDRaCoGoD'
      }
    }
  },
  mutations: {

  },
  actions: {

  }
})
