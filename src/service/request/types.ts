/*
 * @Author       : 林青云
 * @Date         : 2022-04-13 15:41:35
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-04-19 10:37:24
 * @Description  : file content
 * @FilePath     : \vue3-ts-test\src\service\request\types.ts
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
interface QYResquestHook<T = AxiosResponse> {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsError?: (err: any) => any
  requestResponse?: (res: T) => T
  requestResponseError?: (err: any) => any
}
interface QYResquestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  intercepors?: QYResquestHook<T>
}
export { QYResquestConfig, QYResquestHook }
