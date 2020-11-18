import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: '注册页面',
    component: () => import('@/views/register.vue')
  },
  {
    path: '/login',
    name: '登陆页面',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/userinfo',
    name: '个人中心',
    component: () => import('@/views/userinfo.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
