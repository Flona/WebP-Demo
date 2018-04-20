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
