import Vue from 'vue'
import VueRouter from 'vue-router'
import Page from './Page.vue'
import About from './Pages/About.vue'

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
          path: 'about',
          name: 'About',
          component: About
        }
      ]
    }
  ]
});

// import Vue from 'vue';
// import VueRouter from 'vue-router';

// import GlobalScroll from '../components/GlobalScroll.vue';

// Vue.use(VueRouter);

// const router = new VueRouter({
// 	base: '/',
// 	mode: 'history',
// 	routes: [
// 		{
// 			path: '/',
// 			component: GlobalScroll,
// 			alias: '/index.html',
// 			props: true,
// 			children: [
// 				{
// 					path: '',
// 					component: () => import('../components/FrontPage.vue'),
// 					name: 'home',
// 					props: true
// 				},
// 				{
// 					path: 'case_study/:uid',
// 					component: () => import('../components/CaseStudy.vue'),
// 					name: 'case_study',
// 					props: true
// 				},
// 				{
// 					path: 'studio',
// 					component: () => import('../components/StudioPage.vue'),
// 					name: 'studio',
// 					props: true
// 				}
// 			]
// 		},
// 		{
// 			path: '/devmo',
// 			component: () => import('../components/concepts/Devmo.vue'),
// 			name: 'devmo'
// 		},
// 		{
// 			path: '/trails',
// 			component: () => import('../components/concepts/AsteroidTrails.vue'),
// 			name: 'trails'
// 		},
// 		{
// 			path: '*',
// 			component: () => import('../components/NotFound.vue'),
// 			name: '404_page'
// 		}
// 	]
// });

// export default router;

