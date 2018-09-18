import Vue from "vue";
import Router from "vue-router";
import { PATH_TEST, PATH_LOGIN } from "@/constants/URL";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    { path: "/", redirect: PATH_LOGIN },
    {
      path: PATH_TEST,
      component: () => import("@/views/Test.vue")
    },
    {
      path: PATH_LOGIN,
      component: () => import("@/views/login/index.vue")
    },
    {
      path: "*",
      name: "notfound",
      component: () => import("@/views/404.vue")
    }
  ]
});

export default router;
