<!--
 * @Author       : 林青云
 * @Date         : 2022-03-28 09:56:58
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-04-18 09:37:59
 * @Description  : file content
 * @FilePath     : \vue3-ts-test\src\views\login\index.vue
-->
<template>
  <div class="login">
    <LoginPanel />
  </div>
</template>

<script lang="ts">
import LoginPanel from './cpns/login-panel.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Vue3TsTestIndex',
  components: { LoginPanel },
  props: {
    name: String
  },
  setup(props) {
    props.name
  }
})
</script>

<style lang="less">
@import './css/index.less';
</style>
