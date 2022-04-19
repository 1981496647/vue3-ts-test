/*
 * @Author       : 林青云
 * @Date         : 2022-04-18 15:51:53
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-04-19 11:08:44
 * @Description  : file content
 * @FilePath     : \vue3-ts-test\src\service\request\login\login.ts
 */
import qyResquest from '@/service'
import { IAccount } from './types'
enum AccountApi {
  loginRequest = '/login',
  userInfo = '/users/',
  UserMenu = '/role/' //用法
}
interface accountRequest {
  id: string
  name: string
  token: string
}
// 登录账号
export const accountLoginRequest = (payload: IAccount) => {
  return qyResquest.resquest<accountRequest>({
    url: AccountApi.loginRequest,
    method: 'POST',
    data: payload
  })
}
// 获取角色信息
export const requestUserInfoById = (id: string) => {
  return qyResquest.resquest<any>({
    url: AccountApi.userInfo + id,
    method: 'GET'
  })
}

// 获取用户菜单
export const userMenus = (id: string) => {
  return qyResquest.resquest<any>({
    url: AccountApi.UserMenu + id + '/menu',
    method: 'GET'
  })
}
