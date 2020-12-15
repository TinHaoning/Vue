import Home from '@/views/Home.vue'
export default [
    {
      path: '/',
      name: 'Home',
      meta:{
        keepalive:true
      },
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
      component: () => import('@/views/userinfo.vue'),
      meta:{
          istoken: true
      }
    },
    {
      path: '/edit',
      name: '登陆页面',
      component: () => import('@/views/Edit.vue'),
      meta:{
        istoken: true
    }
    },
    {
      path: '/article/:id',
      name: '登陆页面',
      component: () => import('@/views/Article.vue'),
    },
    {
      path: '/editcategory',
      name: '用户选择模块',
      component: () => import('@/views/EditCategory.vue'),
    },
  ]