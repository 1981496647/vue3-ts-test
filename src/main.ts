/*
 * @Author       : 林青云
 * @Date         : 2022-03-25 14:50:10
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-04-18 15:45:47
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
// import qyResquest from './service'
const app = createApp(App)
app.use(router).use(Element).use(store).mount('#app')
// qyResquest
//   .resquest({
//     url: '/login',
//     method: 'POST',
//     data: {
//       name: 'coderwhy',
//       password: '123456'
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })
