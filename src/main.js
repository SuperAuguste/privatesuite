import Vue from 'vue'
import Index from './Index.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false


//ask Vue to process these items

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(Index)
});



// new Vue({
//   router,
//   store,
//   template: '<Page/>',
//   render: function (h) 
//   { 
//     return h(router) 
//   }
// }).$mount('#app')
//it looks like this is what renders a certain page. have to figure out what to do with the router and this.