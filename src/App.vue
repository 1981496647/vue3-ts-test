<!--
 * @Author       : 林青云
 * @Date         : 2022-03-25 13:32:59
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-03-25 14:11:11
 * @Description  : file content
 * @FilePath     : \vue3-ts-test\src\App.vue
-->
<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
