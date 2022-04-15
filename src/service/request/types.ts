/*
 * @Author       : 林青云
 * @Date         : 2022-04-13 15:41:35
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-04-13 15:44:14
 * @Description  : file content
 * @FilePath     : \vue3-ts-test\src\service\request\types.ts
 */
import type { AxiosRequestConfig } from 'axios'
import { AxiosResponse } from 'axios'

interface QYResquestHook {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsError?: (err: any) => any
  requestResponse?: (res: AxiosResponse) => AxiosResponse
  requestResponseError?: (err: any) => any
}
interface QYResquestConfig extends AxiosRequestConfig {
  intercepors: QYResquestHook
}
export { QYResquestConfig, QYResquestHook }
