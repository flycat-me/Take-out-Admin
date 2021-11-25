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
    component: () => import('../views/Home/home.vue')
  }

]

const router = new VueRouter({
  mode: 'history',//设置路由模式为history模式
  routes
})

export default router
