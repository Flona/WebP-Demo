import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import '@assets/css/common.scss'
import Element from 'element-ui'
// import Mock from './mock'
// Mock.bootstrap();
import 'element-ui/lib/theme-chalk/index.css'
// import 'font-awesome/css/font-awesome.min.css'

Vue.use(Element)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
