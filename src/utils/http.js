import axios from 'axios'
import {Toast} from 'vant'

// 创建axios实例
const http = axios.create({
  // baseURL: process.env.VUE_APP_API, // api的base_url
  // withCredentials: true
  timeout: 12000, // 请求超时时间
})

// request拦截器
http.interceptors.request.use(
  config => {
		Toast.loading({
			duration: 0, // 持续展示 loading
			message: '请稍后...'
		})
    const ts = new Date().getTime()
    if(!config.params) config.params = {}
    config.params.ts = ts
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// respone拦截器
http.interceptors.response.use(
  response => {
		return response.data 
  },
  error => {
    // http错误处理
    console.log('err' + error) // for debug
    const {message, response} = error
		Toast(message)
    return Promise.reject(response)
  }
)

export default http
