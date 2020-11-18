import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入vant
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

// 引入封装好的axios实例
import http from '../http'
// prototype全局挂载http
Vue.prototype.$http = http

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
