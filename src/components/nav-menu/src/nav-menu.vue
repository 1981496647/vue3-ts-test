<!--
 * @Author       : 林青云
 * @Date         : 2022-04-19 12:51:44
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-04-19 17:29:05
 * @Description  : file content
 * @FilePath     : \vue3-ts-test\src\components\nav-menu\src\nav-menu.vue
-->
<template>
  <div class="nav-menu">
    <div class="logo">
      <img :src="reactives.logo" alt="" />
      <span> VUE3-TS</span>
    </div>
    <el-menu default-active="2" class="el-menu-silder">
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type == 1">
          <el-sub-menu>
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-sub-menu>
          <template v-for="subitem in item.children" :key="subitem.id">
          </template>
        </template>
        <template v-else-if="item == 2">
          <el-menu-item>
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useStore } from '@/store'
export default defineComponent({
  setup() {
    const store = useStore()
    const userMenus = store.state.login.auserMenu
    const reactives = reactive({
      logo: require('@/assets/logo.png')
    })

    return {
      reactives,
      userMenus
    }
  }
})
</script>

<style lang="less">
@import '../css/nav-menu.less';
</style>
