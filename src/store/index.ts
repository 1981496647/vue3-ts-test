/*
 * @Author       : 林青云
 * @Date         : 2022-03-25 15:37:26
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-04-19 12:16:21
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
export const setupStore = () => {
  console.log(1)
  store.dispatch('login/loadLocalLogin')
}
export default store
