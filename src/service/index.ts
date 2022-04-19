/*
 * @Author       : 林青云
 * @Date         : 2022-04-13 12:52:19
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-04-19 10:49:00
 * @Description  : file content
 * @FilePath     : \vue3-ts-test\src\service\index.ts
 */

import QYResquest from './request/request'
import { BASE_URL, timeout } from './request/config'
import LocalCache from '../utils/cache'
const qyResquest = new QYResquest({
  baseURL: BASE_URL,
  timeout: timeout,
  intercepors: {
    requestInterceptors: (config) => {
      const token = LocalCache.getCache('token')
      console.log(config)
      if (config && config.headers) {
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
      }
      return config
    },
    requestResponse: (res) => {
      console.log('响应成功拦截', res.data)
      return res.data
    }
  }
})
export default qyResquest
