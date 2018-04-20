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
      path: "/auth",
      name: "auth",
      component: () => import("./views/Test.vue"),
      meta: { requiresAuth: true }
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
})

router.beforeEach(async (to, from, next) => {
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

export default router
