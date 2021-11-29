import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    islogin: false,
    username: null
  },
  mutations: {
    set_login(state, islogin) {
      state.islogin = islogin
    },
    set_UserName(state, username) {
      state.username = username
    }
  },
  actions: {
    SET_login(context, islogin) {
      context.commit('set_login',islogin)
    },
    set_UserName(context,username){
      context.commit('set_UserName',username)
    }
  },
  getters: {
    getIsLogin(state) {
      return state.islogin
    },
    getUserName(state){
      return state.username;
    }
  }
})
export default store;