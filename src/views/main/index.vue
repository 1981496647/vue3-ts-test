<!--
 * @Author       : 林青云
 * @Date         : 2022-04-19 11:17:08
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-04-21 16:34:44
 * @Description  : file content
 * @FilePath     : \vue3-ts-test\src\views\main\index.vue
-->
<template>
  <div class="common-layout">
    <el-container class="contaniner">
      <el-aside :width="isColpase ? '63px' : '210px'">
        <NavMenu :isColpase="isColpase" />
      </el-aside>
      <el-container>
        <el-header>
          <HeaderMenu @changeAsideWidth="changeAsideWidth" />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { NavMenu, HeaderMenu } from '@/components/index'
import { defineComponent, reactive, ref } from 'vue'
export default defineComponent({
  name: 'Vue3TsTestIndex',
  components: { NavMenu, HeaderMenu },
  setup() {
    const isColpase = ref(false)
    const mainReactive = reactive({
      widthAside: '200px'
    })
    const changeAsideWidth = (flag: boolean) => {
      isColpase.value = flag
    }
    return {
      mainReactive,
      isColpase,
      changeAsideWidth
    }
  }
})
</script>

<style lang="less">
@import './css/index.less';
</style>
