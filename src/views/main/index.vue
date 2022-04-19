<!--
 * @Author       : 林青云
 * @Date         : 2022-04-19 11:17:08
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-04-19 17:16:33
 * @Description  : file content
 * @FilePath     : \vue3-ts-test\src\views\main\index.vue
-->
<template>
  <div class="common-layout">
    <el-container class="contaniner">
      <el-aside width="200px">
        <!-- <el-menu default-active="2" class="el-menu-certical">
          <template v-for="item in userMenus"> </template>
        </el-menu> -->
        <NavMenu />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { NavMenu } from '@/components/nav-menu'
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
export default defineComponent({
  name: 'Vue3TsTestIndex',
  setup() {
    const store = useStore()
    const userMenus = store.state.login.auserMenu
    return {
      userMenus
    }
  }
  // components: { NavMenu }
})
</script>

<style lang="less">
@import './css/index.less';
</style>
