import Vue from 'vue'
import VueRouter from 'vue-router'
import Page from './Page.vue'
import About from './Pages/About.vue'
import IssuePage from './Pages/IssuePage.vue'
import Contact from './Pages/Contact.vue'
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
          path: 'credits',
          name: 'Credits',
          component: Credits
        },
        {
          path: 'contact',
          name: 'Contact',
          component: Contact
        },
        {
          path: 'issues',
          name: 'IssuePage',
          component: IssuePage,
          children: [
            {
              path: ':slug',
              name: 'IssuePage',
              component: IssuePage,
            }
          ]
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

