/*
 * @Author       : 林青云
 * @Date         : 2022-04-13 12:52:19
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-04-15 14:32:39
 * @Description  : file content
 * @FilePath     : \vue3-ts-test\src\service\index.ts
 */

import QYResquest from './request/request'
import { BASE_URL, timeout } from './request/config'
const qyResquest = new QYResquest({
  baseURL: BASE_URL,
  timeout: timeout,
  intercepors: {
    requestInterceptors: (config) => {
      console.log('请求成功拦截')
      return config
    },
    requestResponse: (res) => {
      console.log('响应成功拦截', res)
      return res
    }
  }
})
export default qyResquest
