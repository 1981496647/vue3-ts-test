/*
 * @Author       : 林青云
 * @Date         : 2022-04-18 14:38:21
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-04-18 14:41:18
 * @Description  : file content
 * @FilePath     : \vue3-ts-test\src\utils\cache.ts
 */
class LocalCache {
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  getCache(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }
  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
