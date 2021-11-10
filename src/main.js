import Vue from 'vue';
import App from './App.vue';
import router from './router';
import TypeNav from "@/components/TypeNav";
import Pagination from "@/components/Pagination";
import store from './store';
import "swiper/css/swiper.css";
import './store/plugins/swiper';
import './store/plugins/element'; //element配置
// 接入mock
import './mock/mockServer'
// 接入所有api
import * as API from '@/api'
// 不显示非生产环境提示
Vue.config.productionTip = false
// 注册全局组件TypeNav与pagination
Vue.component(TypeNav.name, TypeNav)
Vue.component(Pagination.name, Pagination)
new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')
