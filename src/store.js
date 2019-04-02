import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import stylus from "stylus"
import axios from 'axios'
import VueAxios from 'vue-axios'

//Telling Vue to use these imported resources
Vue.use(VueResource, VueAxios, axios, stylus);
Vue.use( Vuex);

Vue.http.options.root = 'https://privatesuitemag.com/wp-json/'
const api = 'https://privatesuitemag.com/wp-json/'

export default new Vuex.Store({
  state: {
    title: '**',
    links: [],
    linkChildren: [],
    postBody: '**',
    preloader: true,
    footer: '',
    credits:'',
    contact: '',
    dropdown: false
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
    },
    updateFooter(state, footer ) {
      Vue.set(state, 'footer', footer);
    },
    updateAbout(state, about ) {
      Vue.set(state, 'about', about);
    },
    updateCredits(state, credits ) {
      Vue.set(state, 'credits', credits);
    },
    updateContact(state, contact ) {
      Vue.set(state, 'contact', contact);
    },
    updateDropdown(state, dropdown) {
      Vue.set(state, 'dropdown', dropdown);
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
      console.log(this.$route);
      //links + dropdown
      await axios.get(api + 'wp-api-menus/v2/menus/29').then((response) => {
        this.links = response.data.items;
        for (let i in this.links) {
          if (this.links[i].children) {
            this.childArray = this.links[i].children;
          }
        }
        commit('updateLinks', this.links);

        commit('updateLinkChildren', this.childArray);
      });
      //post body copy
      await axios.get(api + 'wp/v2/posts').then((response) => {
        this.postBody = response.data;
        
        commit('updatePostBody', this.postBody);
      });
      //footer
      await axios.get(api + 'acf/v3/options/options').then((response) => {
        this.footer = response.data.acf;
        
        commit('updateFooter', this.footer);
      });

      //about
      await axios.get(api + 'wp/v2/pages/167').then((response) => {
        this.about = response.data;
        
        commit('updateAbout', this.about);
      });
      //credits
      await axios.get(api + 'wp/v2/pages/?slug=credits').then((response) => {
        this.credits = response.data[0].acf.credits;
        console.log(this.credits);
        commit('updateCredits', this.credits);
      });

      //contact
      await axios.get(api + 'wp/v2/pages/?slug=contact').then((response) => {
        this.contact = response.data;
        console.log(this.contact[0].content.rendered);
        commit('updateContact', this.contact);
      });

      this.preloader = false;
      commit('updatePreloader', this.preloader);

    }

  },
  toggleDropdown() {
    commit('updateDropdown', this.dropdown);
  }
})
