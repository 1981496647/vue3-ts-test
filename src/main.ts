/*
 * @Author       : 林青云
 * @Date         : 2022-03-25 14:50:10
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-04-21 12:59:25
 * @Description  : file content
 * @FilePath     : \vue3-ts-test\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'
import Element from 'element-plus'
import './assets/css/rest.css'
import '@/assets/iconfont/iconfont.css'
import { setupStore } from './store'
// import qyResquest from './service'
const app = createApp(App)
app.use(router).use(Element).use(store).mount('#app')

setupStore()
