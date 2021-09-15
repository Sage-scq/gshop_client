import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 不显示非生产环境提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
