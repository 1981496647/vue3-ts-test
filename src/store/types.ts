/*
 * @Author       : 林青云
 * @Date         : 2022-04-18 14:59:00
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-04-19 16:57:20
 * @Description  : file content
 * @FilePath     : \vue3-ts-test\src\store\types.ts
 */
interface IRootState {
  name: string
}
interface ILoginState {
  token: string
  userInfo: any
  id: string
  auserMenu: Array<any>
}
interface IRootAndModule {
  login: ILoginState
}
type IStoreType = IRootState & IRootAndModule
export { IRootState, ILoginState, IRootAndModule, IStoreType }
