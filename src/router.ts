// import Vue from "vue"
// import Router from "vue-router"

// import Table from "./views/demo/Table.vue"
// import Form from "./views/demo/Form.vue"
// import OtherPage from "./views/nav/OtherPage.vue"

// Vue.use(Router)

// export default new Router({
//   mode: "history",
//   routes: [
//     {
//       path: "/",
//       component: () => import("./views/Home.vue"),
//       name: "导航一",
//       children: [
//         { path: "/table", component: Table, name: "Table" },
//         { path: "/form", component: Form, name: "Form" }
//       ]
//     },
//     {
//       path: "/",
//       component: () => import("./views/Home.vue"),
//       name: "导航二",
//       children: [
//         { path: "/page1", component: OtherPage, name: "页面1" },
//         { path: "/page2", component: OtherPage, name: "页面2" }
//       ]
//     },
//     {
//       path: "/",
//       component: () => import("./views/Home.vue"),
//       name: "",
//       props: { leaf: true },

//       children: [
//         {
//           path: "/test",
//           component: () => import("./views/Test.vue"),
//           name: "test"
//         }
//       ]
//     }
//   ]
// })

import Vue from "vue"
import Router from "vue-router"
import Auth from "@/utils/auth"
// import Home from ''
// import About from './views/About.vue'

Vue.use(Router)

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/home",
      props: { iconCls: "el-icon-location", label: "Home页面" },
      component: () => import("./layout/SidebarLayout/index.vue"),
      children: [
        {
          path: "",
          props: { label: "Homedsd页面" },
          components: {
            default: () => import("./views/Home.vue"),
            sidebar: () => import("./components/common/Sidebar/index.vue")
          }
        }
      ]
    },
    {
      path: "/table",
      component: () => import("./layout/SidebarLayout/index.vue"),
      props: { iconCls: "el-icon-location", label: "表格模块" },
      children: [
        {
          path: "",
          props: { label: "表格child模块名字" },
          components: {
            default: () => import("./views/demo/Table.vue"),
            sidebar: () => import("./components/common/Sidebar/index.vue")
          }
        }
      ]
    },
    {
      path: "/form",
      component: () => import("./layout/SidebarLayout/index.vue"),
      props: { iconCls: "el-icon-location", label: "表格模块" },
      children: [
        {
          path: "",
          props: { label: "form child模块名字" },
          components: {
            default: () => import("./views/demo/Form.vue"),
            sidebar: () => import("./components/common/Sidebar/index.vue")
          }
        }
      ]
    },
    {
      path: "/about",
      component: () => import("./layout/NavbarLayout/index.vue"),
      props: { iconCls: "el-icon-location", label: "about模块" },
      children: [
        {
          path: "",
          props: { iconCls: "el-icon-location", label: "about 页" },
          components: {
            default: () => import("./views/About.vue"),
            nav: () => import("./components/common/Navbar/index.vue")
          }
        }
      ]
    },
    {
      path: "/test",
      props: { iconCls: "el-icon-location", label: "test页无子模块" },
      component: () => import("./views/Test.vue")
    },
    {
      path: "/auth",
      props: { iconCls: "el-icon-location", label: "auth" },
      meta: { requiresAuth: true },
      component: () => import("./views/Test.vue")
    },
    {
      path: "*",
      name: "notfound",
      component: () => import("./views/404.vue")
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.

    try {
      const logined = await Auth.isLogined()
      console.log(logined)
      if (logined) {
        // 如果判断是已登录情况,则继续
        next()
      } else {
        // 假设这里的about页是未登录情况下跳转的地方
        console.log("not authrized")
        next({
          path: "/login"
        })
      }
    } catch (error) {
      console.log("get user auth 500")
      // 如果请求报错,一般是500的时候,应该停留在当前页面
      next(false)
    }
  } else {
    next()
  }
})

export default router
