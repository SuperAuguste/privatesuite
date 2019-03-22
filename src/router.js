import Vue from 'vue'
import VueRouter from 'vue-router'
import Page from './Page.vue'
import About from './Pages/About.vue'
import PostPage from './Pages/PostPage.vue'
// import FictionPage from './Pages/FictionPage.vue'
// import NewsPage from './Pages/NewsPage.vue'
// import ReviewsPage from './Pages/ReviewsPage.vue'
import Credits from './Pages/Credits.vue'





import Home from './views/Home.vue'



Vue.use(VueRouter);


//create the VueRouter component
export default new VueRouter( {
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Page,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: 'about',
          name: 'About',
          component: About
        },
        {
          path: ':slug',
          name: 'PostPage',
          component: PostPage,
          children: [
            {
            path: ':slug',
             name: 'PostPage',
             component: PostPage
            }
          ]

        },
        {
          path: 'credits',
          name: 'Credits',
          component: Credits
        }
      ]
    },
    {
    path: '/:slug',
    //i needa add a 404 page to this later
    component: PostPage
    }
  ]
});

