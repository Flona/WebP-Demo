import Vue from 'vue'
import Router from 'vue-router'

import Table from './views/demo/Table.vue'
import Form from './views/demo/Form.vue'
import OtherPage from './views/nav/OtherPage.vue'

Vue.use(Router)

export default new Router({
    mode:"history",
    routes: [
        {
            path: '/',
            component:  () => import('./views/Home.vue'),
            name: '导航一',
            children: [
                { path: '/table', component: Table, name: 'Table' },
                { path: '/form', component: Form, name: 'Form' },
            ]
        },
        {
            path: '/',
            component:  () => import('./views/Home.vue'),
            name: '导航二',
            children: [
                { path: '/page1', component: OtherPage, name: '页面1' },
                { path: '/page2', component: OtherPage, name: '页面2' }
            ]
        },
        {
            path: '/',
            component:  () => import('./views/Home.vue'),
            name: '',
            leaf:true,
            children: [
                { path: '/test', component: () => import('./views/Test.vue'), name: 'test' }
            ]
        }
    ],
})


/*
import Vue from "vue";
import Router from "vue-router";
// import Home from ''
// import About from './views/About.vue'

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("./layout/SidebarLayout/index.vue"),
      children: [
        {
          path: "",
          components: {
            default: () => import("./views/Home.vue"),
            sidebar: () => import("./components/common/Sidebar/index.vue")
          }
        }
      ]
    },
    {
      path: "/about",
      component: () => import("./layout/NavbarLayout/index.vue"),
      children: [
        {
          path: "",
          components: {
            default: () => import("./views/About.vue"),
            nav: () => import("./components/common/Navbar/index.vue")
          }
        }
      ]
    },
    {
      path: "/test",
      name: "test",
      component: () => import("./views/Test.vue")
    },
    {
      path: "*",
      name: "notfound",
      component: () => import("./components/common/NotFound/index.vue")
    }
  ]
});
*/


/*router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    let logined = false
    try {
      logined = await Auth.isLogined()
      if (logined) {
        // 如果判断是已登录情况,则继续
        next()
      } else {
        // 假设这里的about页是未登录情况下跳转的地方
        next({
          path: "/about"
        })
      }
    } catch (error) {
      // 如果请求报错,一般是500的时候,应该跳转报错页面
      next({
        replace: true,
        name: "notfound",
        params: { "0": to.path }
      })
    }
  } else {
    next()
  }
})

export default router*/
