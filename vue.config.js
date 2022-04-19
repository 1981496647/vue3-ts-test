/*
 * @Author       : 林青云
 * @Date         : 2022-03-25 14:50:10
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-04-18 16:10:27
 * @Description  : file content
 * @FilePath     : \vue3-ts-test\vue.config.js
 */
const path = require('path')
const { defineConfig } = require('@vue/cli-service')
// const AutoImport = require('unplugin-auto-import/webpack')
// const Components = require('unplugin-vue-components/webpack')
// const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  outputDir: './build',
  // configureWebpack: {
  //   resolve: {
  //     alias :{
  //       components: '@/component'
  //     }
  //   }
  // }
  devServer: {
    // proxy: {
    //   '/api': {
    //     target: 'http://152.136.185.210:5000'
    //   }
    // }
  },
  configureWebpack: {
    // conifg.resolve.alias = {
    //   '@': path.resolve(__dirname, 'src'),
    //   components: '@/components',
    //   view: '@/views'
    // }
    // plugins: [],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        components: '@/components',
        view: '@/views'
      }
    }
    // conifg.plugins = [
    //   AutoImport({
    //     resolvers: [ElementPlusResolver]
    //   }),
    //   Components({
    //     resolvers: [ElementPlusResolver]
    //   })
    // ]
  }
})
