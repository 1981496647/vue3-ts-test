/*
 * @Author       : 林青云
 * @Date         : 2022-04-18 10:51:30
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-04-18 13:34:57
 * @Description  : file content
 * @FilePath     : \vue3-ts-test\src\views\login\config\account.ts
 */
const nameValidator = (rule: object, value: string, callback: any) => {
  if (value.trim() == '') {
    callback(new Error('请输入账号'))
  } else if (value.length < 6 || value.length > 12) {
    callback(new Error('账号在6-12个字符之间'))
  } else {
    callback()
  }
}
const passwordValidator = (rule: any, value: string, callback: any) => {
  if (value.trim() == '') {
    callback(new Error('请输入密码'))
  } else if (value.length < 6 || value.length > 12) {
    callback(new Error('密码为6为以上'))
  } else {
    callback()
  }
}
export { nameValidator, passwordValidator }
