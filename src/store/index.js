import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  loggedIn: false
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules: {}
})
