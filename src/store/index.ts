/*
 * @Author       : 林青云
 * @Date         : 2022-03-25 15:37:26
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-04-19 17:02:33
 * @Description  : file content
 * @FilePath     : \vue3-ts-test\src\store\index.ts
 */
import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState, IStoreType } from './types'
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
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store
