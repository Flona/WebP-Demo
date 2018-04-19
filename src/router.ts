import Vue from 'vue'
import Router from 'vue-router'
// import Home from ''
// import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('./views/Test.vue'),
    },
  ],
})
