import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    users: [
      { name: 'glo abredit', age: 27, status: 0, created_at: '2017-09-11' },
      { name: 'gia fella', age: 29, status: 1, created_at: '2017-09-01' },
      { name: 'ohaneze david', age: 23, status: 0, created_at: '2017-09-09' },
      { name: 'paul david', age: 21, status: 1, created_at: '2017-09-21' },
      { name: 'john williams', age: 20, status: 0, created_at: '2017-03-13' },
      { name: 'mary jokers', age: 28, status: 1, created_at: '2017-09-30' },
      { name: 'chris aloha', age: 27, status: 0, created_at: '2017-09-19' },
      { name: 'johnson silva', age: 29, status: 0, created_at: '2017-09-17' },
      { name: 'sens carlos', age: 26, status: 0, created_at: '2017-09-04' },
      { name: 'sophia nkom', age: 25, status: 0, created_at: '2017-09-05' },
      { name: 'jo westley', age: 22, status: 1, created_at: '2017-09-16' },
      { name: 'sam john', age: 24, status: 0, created_at: '2017-04-01' },
      { name: 'dia dia', age: 27, status: 1, created_at: '2017-05-08' }
    ],
    sidebarToggled: false
  },
  actions: {
    ADD_USER: function ({ commit }, newUser) {
      commit('ADD_USER_MUTATION', newUser)
    },
    DELETE_USER: function ({ commit }, userId) {
      commit('DELETE_USER_MUTATION', userId)
    },
    TOGGLE_SIDEBAR: function ({ commit }, toggled) {
      commit('TOGGLE_SIDEBAR_MUTATION', toggled)
    }
  },

  mutations: {
    ADD_USER_MUTATION: function (state, newUser) {
      state.users.push(newUser)
    },
    DELETE_USER_MUTATION: function (state, userId) {
      state.users.splice(userId, 1)
    },
    TOGGLE_SIDEBAR_MUTATION: function (state, toggled) {
      state.sidebarToggled = toggled
    }
  },

  getters: {
    users: state => {
      return state.users
    },
    toggledFlag: state => {
      return state.sidebarToggled
    }
  }
})
export default store
