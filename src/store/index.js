import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './modules/getters'
import * as mutations from './modules/mutations'
import * as actions from './modules/actions'
Vue.use(Vuex)

const store = new Vuex.Store({
  //状态
  state: {
    currentUser: null,
    isLogin: false,
    token: ""
  },
  getters,
  mutations,
  actions
})

export default store