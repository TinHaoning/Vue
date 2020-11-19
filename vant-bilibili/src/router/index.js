import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//单一职责，导入路由
import routes from './routes'


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
 if((!localStorage.getItem('token') || !localStorage.getItem('id')) && to.meta.istoken == true) {
   router.push('/login')
   Vue.prototype.$msg.fail('请重新登录')
   return
 }
 next()
})

export default router
