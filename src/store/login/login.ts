/*
 * @Author       : 林青云
 * @Date         : 2022-04-18 14:55:37
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-04-18 15:06:02
 * @Description  : file content
 * @FilePath     : \vue3-ts-test\src\store\login\login.ts
 */
import { Module } from 'vuex'
import { ILoginState, IRootState } from '../types'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  getters: {},
  mutations: {},
  actions: {
    accountLoginAction({ commit }, payload: any) {
      console.log('执行', payload)
    }
  }
}

export default loginModule
