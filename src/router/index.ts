/*
 * @Author       : 林青云
 * @Date         : 2022-03-25 14:50:10
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-04-19 11:29:07
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
    component: () => import('view/main/index.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to) => {
  if (to.path != '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
})

export default router
