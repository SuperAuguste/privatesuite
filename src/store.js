import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

import axios from 'axios'
import VueAxios from 'vue-axios'

//Telling Vue to use these imported resources
Vue.use(VueResource, VueAxios, axios);
Vue.use( Vuex);

Vue.http.options.root = 'https://privatesuitemag.com/wp-json/'
const api = 'https://privatesuitemag.com/wp-json/'

export default new Vuex.Store({
  state: {
    title: '**',
    links: [],
    linkChildren: [],
    postBody: '**',
    preloader: false


    },



  getters: {
  },
  mutations: {
    updatePreloader(state, preloader) {
      Vue.set(state, 'preloader', preloader);
    },
    updateTitle(state, title) {
      Vue.set(state, 'title', title);
    },
    updateLinks(state, links) {
      Vue.set(state, 'links', links);
    },
    updateLinkChildren(state, linkChildren) {
      Vue.set(state, 'linkChildren', linkChildren);
    },
    updatePostBody(state, postBody) {
      Vue.set(state, 'postBody', postBody);
    },
      //post category (CURRENTLY NOT IN USE)
    updatePostCategory(state, postCategory ) {
      Vue.set(state, 'postCategory', postCategory);
    }
  
  },
  method: {
  },
  actions: {
    async loadData({ commit }, resolve) {
//title of magazine
     await axios.get(api).then((response) => {
        this.title = response.data.name;

        commit('updateTitle', this.title);

      });
      //nav links
      await axios.get(api + 'wp-api-menus/v2/menus/29').then((response) => {
        this.links = response.data.items;

        commit('updateLinks', this.links);

      });
      //link dropdown
      await axios.get(api + 'wp-api-menus/v2/menus/29').then((response) => {
        this.links = response.data.items;
        for (let i in this.links) {
          if (this.links[i].children) {
            this.childArray = this.links[i].children;
          }
        }
        commit('updateLinkChildren', this.childArray);
      });
      //post body copy
      await axios.get(api + 'wp/v2/posts').then((response) => {
        this.postBody = response.data;
        
        commit('updatePostBody', this.postBody);
      });
      //post category (CURRENTLY NOT IN USE)
      await axios.get(api + 'wp/v2/categories').then((response) => {
        this.postCategory = response.data;
        
        commit('updatePostCategory', this.postCategory);
      });



      this.preloader = true;
      commit('updatePreloader', this.preloader);

    }

  }
})
