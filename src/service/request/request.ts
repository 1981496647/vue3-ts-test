/*
 * @Author       : 林青云
 * @Date         : 2022-04-13 12:54:02
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-04-19 12:32:19
 * @Description  : file content
 * @FilePath     : \vue3-ts-test\src\service\request\request.ts
 */
import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { QYResquestConfig, QYResquestHook } from './types'
// interface QYRequestInterceptors {
//   requestIn
// }
class QYResquest {
  instance: AxiosInstance
  intercepors?: QYResquestHook
  constructor(config: QYResquestConfig) {
    this.instance = axios.create(config)

    this.intercepors = config.intercepors

    this.instance.interceptors.request.use(
      this.intercepors?.requestInterceptors,
      this.intercepors?.requestInterceptorsError
    )

    this.instance.interceptors.response.use(
      this.intercepors?.requestResponse,
      this.intercepors?.requestResponseError
    )
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        return res
      },
      (err) => {
        return err
      }
    )
  }
  resquest<T = any>(config: QYResquestConfig<T>): Promise<T> {
    return new Promise((reslove) => {
      this.instance.request(config).then((res) => {
        reslove(res.data)
      })
    })
  }
}
export default QYResquest
