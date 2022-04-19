<!--
 * @Author       : 林青云
 * @Date         : 2022-04-19 12:51:44
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-04-19 15:59:51
 * @Description  : file content
 * @FilePath     : \vue3-ts-test\src\components\nav-menu\src\nav-menu.vue
-->
<template>
  <div class="nav-menu">
    <div class="logo">
      <img :src="reactives.logo" alt="" />
      <span> VUE3-TS</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const reactives = reactive({
      logo: require('@/assets/logo.png')
    })
    return {
      reactives
    }
  }
})
</script>

<style lang="less">
@import '../css/nav-menu.less';
</style>
