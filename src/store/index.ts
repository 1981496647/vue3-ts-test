/*
 * @Author       : 林青云
 * @Date         : 2022-03-25 15:37:26
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-03-25 15:39:51
 * @Description  : file content
 * @FilePath     : \vue3-ts-test\src\store\index.ts
 */
import { createStore } from 'vuex'
const store = createStore({
  state: () => {
    return {
      name: 'why'
    }
  },
  mutations: {},
  actions: {},
  getters: {}
})

export default store
