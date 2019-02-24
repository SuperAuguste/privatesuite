import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

//Telling Vue to use these imported resources
Vue.use(VueResource);
Vue.use(Vuex);

Vue.http.options.root = 'https://privatesuitemag.com/wp-json/'


export const store = new Vuex.Store({
  state: {
      // mainNav: [{
      //   title:'private suite',
      //   links: []
      // }],
      // news: [{
      //   image: '',
      //   title: '',
      //   body: ''
      // }]
    },

  mounted() {
  },
  methods: {
    // dataFetch() {
    //   this.$http.get('').then((response) => {
    //     this.mainNav.title = response.body.name;
    //     console.log(this.mainNav.title);
    //     this.$store.commit('dataFetch');
    //   });
    // },
  },
  mutations: {
  //   outputContent: state => {
  //   state.mainNav.title = this.response.body.name;
  //   }
  },
  getters: {
    // mapState: state => {
    //   return state;
    // }
  },
  actions: {

  }
})
