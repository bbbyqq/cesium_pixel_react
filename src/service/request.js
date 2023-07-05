import axios from 'axios'
import { message } from 'antd'

export function request (config) {
  // 创建axios的实例
  const instance = axios.create({
    baseURL: 'http://192.168.2.44:49975',
    timeout: 10000
  })

  // 请求拦截器配置
  instance.interceptors.request.use(config => {
    return config
  }, error => {
    return Promise.error(error)
  })

  // 响应拦截器配置
  instance.interceptors.response.use(response => {
    return response.data
  }, error => {
    if (!error.response) {
      message.error('服务器未启动')
      return
    }
    switch (error.response.status) {
      case 401:
        message.error('无权访问')
        break
      case 403:
        message.error('token过期')
        break
      case 404:
        message.error('404')
        break
      case 500:
        message.error('服务器错误')
        break
      default:
        return Promise.reject(error)
    }
    return Promise.reject(error)
  })
  // 发送真正的网络请求
  return instance(config)
}

export default request
