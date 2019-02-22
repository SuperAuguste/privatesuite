import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      back: '/',
      device: {},
      transition: 'v',
      navOpen: false,
      navData: {},
      resourceTags: [],
      title: 'My title',
      links: [
        'http://google.com',
        'cool.com',
        'yeah.com'
      ]
    },
  getters: {
    mapContent: state => {
      return state.title;
    }

  },
  mutations: {

  },
  actions: {

  }
})
