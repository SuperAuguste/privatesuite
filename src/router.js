import Vue from 'vue'
import VueRouter from 'vue-router'
import Page from './Page.vue'
import About from './Pages/About.vue'
import FeaturesPage from './Pages/FeaturesPage.vue'
import FictionPage from './Pages/FictionPage.vue'
import NewsPage from './Pages/NewsPage.vue'
import ReviewsPage from './Pages/ReviewsPage.vue'




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
          path: 'features',
          name: 'FeaturesPage',
          component: FeaturesPage
        },
        {
          path: 'fiction',
          name: 'FictionPage',
          component: FictionPage
        },
        {
          path: 'news',
          name: 'NewsPage',
          component: NewsPage
        },
        {
          path: 'reviews',
          name: 'ReviewsPage',
          component: ReviewsPage
        }
      ]
    },
    {
    path: '/:slug',
    //i needa add a 404 page to this later
    component: Page
    }
  ]
});

