import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home/home.vue'),
    //redirect: 'home',
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('../views/v-charts/index.vue')
      },
      {
        path: 'test',
        name: 'test',
        component: () => import('../views/v-charts/test.vue')
      }
    ]
  },
  {
    // 会匹配所有路径404
    path: '*',
    name: '404',
    component: () => import('../views/notFound/404.vue')
  }

]

const router = new VueRouter({
  mode: 'history',//设置路由模式为history模式
  routes
})

export default router
