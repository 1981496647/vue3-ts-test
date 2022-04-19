/*
 * @Author       : 林青云
 * @Date         : 2022-04-18 14:55:37
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-04-19 12:24:43
 * @Description  : file content
 * @FilePath     : \vue3-ts-test\src\store\login\login.ts
 */
import { Module } from 'vuex'
import { ILoginState, IRootState } from '../types'
import {
  accountLoginRequest,
  requestUserInfoById,
  userMenus
} from '@/service/request/login/login'
import { IAccount } from '@/service/request/login/types'
import LocalCache from '@/utils/cache'
import router from '@/router'
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      id: '',
      userInfo: {},
      auserMenu: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, payload) {
      state.token = payload.token
      state.id = payload.id
    },
    changeUserInfo(state, payload) {
      state.userInfo = payload
    },
    changeUserMenu(state, payload) {
      console.log(payload)
      state.auserMenu = payload
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 获取登录i信息
      const res = await accountLoginRequest(payload)
      commit('changeToken', res)
      LocalCache.setCache('token', res.token)
      // 获取角色信息
      const userInfoResult = await requestUserInfoById(res.id)
      commit('changeUserInfo', userInfoResult)
      LocalCache.setCache('userInfo', userInfoResult)
      // 获取菜单
      const auserMenu = await userMenus(userInfoResult.role.id)
      LocalCache.setCache('userMenu', auserMenu)
      commit('changeUserMenu', auserMenu)
      console.log(router)

      router.push('/main')
    },

    loadLocalLogin({ commit }) {
      const token = LocalCache.getCache('token')
      const userInfo = LocalCache.getCache('userInfo')
      const userMenus = LocalCache.getCache('userMenu')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      if (token) {
        commit('changeToken', {
          id: userInfo.id,
          token: token
        })
      }
      if (userMenus.length > 0) {
        commit('changeUserMenu', userMenus)
      }
    }
  }
}

export default loginModule
