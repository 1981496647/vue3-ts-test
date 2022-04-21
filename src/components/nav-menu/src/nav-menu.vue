<!--
 * @Author       : 林青云
 * @Date         : 2022-04-19 12:51:44
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-04-21 13:48:09
 * @Description  : file content
 * @FilePath     : \vue3-ts-test\src\components\nav-menu\src\nav-menu.vue
-->
<template>
  <div class="nav-menu">
    <div class="logo">
      <img :src="reactives.logo" alt="" />
      <span v-if="!isColpase"> VUE3-TS</span>
    </div>
    <el-menu
      class="el-menu-silder el-menu-vertical-demo"
      ellipsis
      :collapse="isColpase"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 菜单 -->
        <template v-if="item.type == 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <i class="iconfont icon-zhuye"></i>
              <span class="desc">{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.id + ''">{{
                subitem.name
              }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 二级菜单 -->
        <template v-else>
          <el-menu-item :index="item.id + ''">
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
  props: {
    isColpase: {
      type: Boolean,
      default: false
    }
  },
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
