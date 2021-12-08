import axios from 'axios'
import router from '../router'


const request = axios.create({
    baseURL: 'http://localhost:8081/',
    timeout :5000,
    headers: {
        get: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        post: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    }
})


//添加请求拦截器
request.interceptors.request.use(config => {
  const token = sessionStorage.getItem("token")
  // 在发送请求之前做些什么
  if(token){
    config.headers['Authorization'] = sessionStorage.getItem("token")
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});


// 响应拦截器
axios.interceptors.response.use(response => {
    // 如果返回的状态码为200，说明接口请求成功
    // 否则的话抛出错误
    if (response.status === 200) {
      if (response.data.code === 511) {
        // 未授权调取授权接口
        router.push('/login')
      } else if (response.data.code === 403) {
        // 未登录跳转登录页
        router.push('/login')
      } else {
        return Promise.resolve(response)
      }
    } else {
      return Promise.reject(response)
    }
  }, error => {
    // 我们可以在这里对异常状态作统一处理
    if (error.response.status) {
      // 处理请求失败的情况
      // 对不同返回码对相应处理
      return Promise.reject(error.response)
    }
  })

  export default request