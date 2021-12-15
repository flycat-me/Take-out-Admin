import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/',
    component: () => import('../views/Home/home.vue'),
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('../views/v-charts/index.vue')
      },
      {
        path: 'addFoods',
        name: 'addFoods',
        component: () => import('../views/add/addFoods.vue')
      },
      {
        path: 'foodList',
        name: 'foodList',
        component: () => import('../views/list/foodList.vue')
      },
      {
        path: 'orderList',
        name: 'orderList',
        component: () => import('../views/list/orderList.vue')
      },
      {
        path: 'shopList',
        name: 'shopList',
        component: () => import('../views/list/shopList.vue')
      },
      {
        path: 'userInfo',
        name: 'userInfo',
        component: () => import('../views/user/userInfo.vue')
      },
      {
        path: 'chartsIndex',
        name: 'chartsIndex',
        component: () => import('../views/v-charts/statistics.vue')
      },
      {
        path: 'Oder',
        name: 'Oder',
        component: () => import('../views/info/Oder.vue')
      },
      {
        path: 'backlog',
        name: 'backlog',
        component: () => import('../views/system/backlog.vue')
      },
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
