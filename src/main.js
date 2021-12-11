import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import VCharts from 'v-charts-v2'
import store from './store/index'


router.beforeEach((to, from, next) => {

  if(to.path == "/login"){
    next()
    return
  }else if(!sessionStorage.getItem('username')){
    next("/login")
  }else{
    next()
  }
});

Vue.use(ElementUI)
Vue.use(VCharts)
//Vue.use(router)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
