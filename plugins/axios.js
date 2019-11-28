import axios from 'axios'
// import {getToken} from '@/utils/cookies'

// create an axios instance
// const whiteList = ['webapi']
const http = axios.create({
  // baseURL: 'http://123.56.7.142', // api的base_url
  // timeout: 10000 // request timeout
})
// request interceptor
http.interceptors.request.use(
  config => {
    // if (getToken()) {
    //     // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    //     config.headers['Authorization'] = getToken()
    // }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// respone interceptor
http.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    return Promise.resolve(error.response)
  }
)

export default http
