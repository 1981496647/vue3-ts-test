/*
 * @Author       : 林青云
 * @Date         : 2022-03-25 14:50:10
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-04-21 17:27:16
 * @Description  : file content
 * @FilePath     : \vue3-ts-test\src\router\index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import localCache from '../utils/cache'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('view/login/index.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('view/main/index.vue'),
    children: []
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/common/NotFound/NotFound.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})
// 可以在导航处理菜单信息
router.beforeEach((to) => {
  if (to.path != '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
})

export default router
