import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.http.options.root = 'https://privatesuitemag.com/wp-json'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      title: 'My title',
      links: [
        'http://google.com',
        'cool.com',
        'yeah.com'
      ]
    },
    methods:{
      dataFetch() {
        this.$http.get('').then((response) => {
          this.title = response.body.name;
        });
      }
    },
    mounted() {
      dataFetch();
    },
  getters: {
    mapState: state => {
      return state.title;
    }

  },
  mutations: {

  },
  actions: {

  }
})
