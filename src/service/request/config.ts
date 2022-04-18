/*
 * @Author       : 林青云
 * @Date         : 2022-04-13 11:28:00
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-04-18 15:43:17
 * @Description  : file content
 * @FilePath     : \vue3-ts-test\src\service\request\config.ts
 */
let BASE_URL = 'http://121.199.41.191:1110'
let BASE_NAME = 'qy'
const timeout = 10000
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://152.136.185.210:5000'
  BASE_NAME = 'kobe'
} else {
  BASE_URL = 'http://121.199.41.191:1110'
  BASE_NAME = 'QY'
}

export { BASE_URL, BASE_NAME, timeout }
