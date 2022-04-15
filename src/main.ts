/*
 * @Author       : 林青云
 * @Date         : 2022-03-25 14:50:10
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-04-15 14:34:07
 * @Description  : file content
 * @FilePath     : \vue3-ts-test\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'
import Element from 'element-plus'
import qyResquests from './service'
const app = createApp(App)
app.use(router).use(Element).use(store).mount('#app')
console.log(process.env, qyResquests)
interface DataType {
  data: any
  returnCode: string
  success: boolean
}
qyResquests
  .resquest<DataType>({
    url: '/banner',
    method: 'get'
  })
  .then((res) => {
    console.log(res)
  })
