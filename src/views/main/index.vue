<!--
 * @Author       : 林青云
 * @Date         : 2022-04-19 11:17:08
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-04-19 16:05:42
 * @Description  : file content
 * @FilePath     : \vue3-ts-test\src\views\main\index.vue
-->
<template>
  <div class="common-layout">
    <el-container class="contaniner">
      <el-aside width="200px">
        <el-scrollbar>
          <el-menu :default-openeds="['1', '3']">
            <el-sub-menu index="1">
              <template #title>
                <el-icon><message /></el-icon>Navigator One
              </template>
              <el-menu-item-group>
                <!-- <template #title>Group 1</template> -->
                <el-menu-item index="1-1">Option 1</el-menu-item>
                <el-menu-item index="1-2">Option 2</el-menu-item>
                <NavMenu />
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
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
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Vue3TsTestIndex',
  components: { NavMenu }
})
</script>

<style lang="less">
@import './css/index.less';
</style>
