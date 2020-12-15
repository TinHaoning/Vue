import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入vant
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

// 引入轻提示
import { Toast } from 'vant'
Vue.prototype.$msg = Toast

// 引入封装好的axios实例
import http from '../http'
// prototype全局挂载http
Vue.prototype.$http = http

import '@/assets/style.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
