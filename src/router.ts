import {
  NAV_AUTH_PAGE,
  NAV_TEST_PAGE,
  NAV_ABOUT_MODULE,
  NAV_ABOUT_MODULE_SUB_PAGE,
  NAV_FORM_CHILE_PAGE,
  NAV_FORM_MODULE,
  NAV_HOME_PAGE,
  NAV_HOME_SUB_PAGE,
  NAV_TABLE_MODULE,
  NAV_TANLE_MODULE_SUB_PAGE
} from "@/constants/TEXT"
import Auth from "@/utils/auth"
import Vue from "vue"
import Router from "vue-router"
import {
  PATH_HOME,
  PATH_TABLE,
  PATH_FORM,
  PATH_ABOUT,
  PATH_TEST,
  PATH_AUTH,
  PATH_LOGIN
} from "@/constants/URL"

Vue.use(Router)

const router = new Router({
  mode: "history",
  routes: [
    {
      path: PATH_HOME,
      props: { iconCls: "el-icon-location", label: NAV_HOME_PAGE },
      component: () => import("@/layout/SidebarLayout/index.vue"),
      children: [
        {
          path: "",
          props: { label: NAV_HOME_SUB_PAGE },
          components: {
            default: () => import("@/views/Home.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        }
      ]
    },
    {
      path: PATH_TABLE,
      component: () => import("@/layout/SidebarLayout/index.vue"),
      props: { iconCls: "el-icon-location", label: NAV_TABLE_MODULE },
      children: [
        {
          path: "",
          props: { label: NAV_TANLE_MODULE_SUB_PAGE },
          components: {
            default: () => import("@/views/demo/Table.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        }
      ]
    },
    {
      path: PATH_FORM,
      component: () => import("@/layout/SidebarLayout/index.vue"),
      props: { iconCls: "el-icon-location", label: NAV_FORM_MODULE },
      children: [
        {
          path: "",
          props: { label: NAV_FORM_CHILE_PAGE },
          components: {
            default: () => import("@/views/demo/Form.vue"),
            sidebar: () => import("@/components/common/Sidebar/index.vue")
          }
        }
      ]
    },
    {
      path: PATH_ABOUT,
      component: () => import("@/layout/NavbarLayout/index.vue"),
      props: { iconCls: "el-icon-location", label: NAV_ABOUT_MODULE },
      children: [
        {
          path: "",
          props: {
            iconCls: "el-icon-location",
            label: NAV_ABOUT_MODULE_SUB_PAGE
          },
          components: {
            default: () => import("@/views/About.vue"),
            nav: () => import("@/components/common/Navbar/index.vue")
          }
        }
      ]
    },
    {
      path: PATH_TEST,
      props: { iconCls: "el-icon-location", label: NAV_TEST_PAGE },
      component: () => import("@/views/Test.vue")
    },
    {
      path: PATH_AUTH,
      props: { iconCls: "el-icon-location", label: NAV_AUTH_PAGE },
      meta: { requiresAuth: true },
      component: () => import("@/views/Test.vue")
    },
    {
      path: "*",
      name: "notfound",
      component: () => import("@/views/404.vue")
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
          path: PATH_LOGIN
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
