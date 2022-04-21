<!--
 * @Author       : 林青云
 * @Date         : 2022-04-20 15:36:02
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-04-21 16:18:11
 * @Description  : file content
 * @FilePath     : \vue3-ts-test\src\components\nav-header\nav-header.vue
-->
<template>
  <div class="header-nav">
    <i
      @click="handleOpenClick"
      :class="{
        iconfont: true,
        open: true,
        ['icon-shouqicaidan']: reactiveFails.isHeader,
        ['icon-zhankaicaidan']: !reactiveFails.isHeader
      }"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  emits: ['changeAsideWidth'],
  setup(props, { emit }) {
    const reactiveFails = reactive({
      isHeader: false
    })
    const handleOpenClick = () => {
      reactiveFails.isHeader = !reactiveFails.isHeader
      emit('changeAsideWidth', reactiveFails.isHeader)
    }
    return {
      reactiveFails,
      handleOpenClick
    }
  }
})
</script>

<style lang="less" scoped>
@import './css/nav-header.less';
</style>
