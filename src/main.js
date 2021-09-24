import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from "@/components/TypeNav";
import store from './store'
import "swiper/css/swiper.css";
// 接入mock
import './mock/mockServer'
// 不显示非生产环境提示
Vue.config.productionTip = false
// 注册全局组件TypeNav
Vue.component(TypeNav.name, TypeNav)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
