/*
 * @Author       : 林青云
 * @Date         : 2022-04-18 14:59:00
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-04-18 15:01:11
 * @Description  : file content
 * @FilePath     : \vue3-ts-test\src\store\types.ts
 */
interface IRootState {
  name: string
}
interface ILoginState {
  token: string
  userInfo: any
}
export { IRootState, ILoginState }
