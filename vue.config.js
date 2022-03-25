/*
 * @Author       : 林青云
 * @Date         : 2022-03-25 14:50:10
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-03-25 15:13:35
 * @Description  : file content
 * @FilePath     : \vue3-ts-test\vue.config.js
 */
const path = require('path')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: './build',
  // configureWebpack: {
  //   resolve: {
  //     alias :{
  //       components: '@/component'
  //     }
  //   }
  // }
  configureWebpack: (conifg) => {
    conifg.resolve.alias = {
      '@': path.resolve(__dirname, 'src'),
      components: '@/components',
      view: '@/views'
    }
  }
})
