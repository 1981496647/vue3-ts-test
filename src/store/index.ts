/*
 * @Author       : 林青云
 * @Date         : 2022-03-25 15:37:26
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-04-18 15:07:04
 * @Description  : file content
 * @FilePath     : \vue3-ts-test\src\store\index.ts
 */
import { createStore } from 'vuex'
import { IRootState } from './types'
import login from './login/login'
const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'why'
    }
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    login
  }
})

export default store
