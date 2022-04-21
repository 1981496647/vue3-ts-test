/*
 * @Author       : 林青云
 * @Date         : 2022-04-21 17:29:22
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-04-21 17:34:52
 * @Description  : file conten
 * @FilePath     : \vue3-ts-test\src\utils\map-menus.ts
 */
import { RouteRecordRaw } from 'vue-router'
export const mapMenusRoutes = (userMenus: any[]): RouteRecordRaw[] => {
  const routes: RouteRecordRaw[] = []
  // 1 先去加载所有的routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFails = require.context('../router/main', true, /\.ts/)
  // 2 根据菜单获取相应的路由

  return routes
}
