<!--
 * @Author       : 林青云
 * @Date         : 2022-04-18 09:35:40
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-04-18 15:16:20
 * @Description  : file content
 * @FilePath     : \vue3-ts-test\src\views\login\cpns\login-panel.vue
-->
<template>
  <div class="login-panel">
    <h3 class="title">后台管理系统</h3>
    <el-tabs stretch type="border-card" v-model="tabsValue" class="demo-tabs">
      <el-tab-pane name="0">
        <template #label>
          <span>账号登录</span>
        </template>
        <LoginAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="1">
        <template #label>
          <div>手机登录</div>
        </template>
        <LoginPhone />
      </el-tab-pane>
    </el-tabs>
    <div class="edit">
      <el-checkbox-group v-model="reactives">
        <el-checkbox label="1">记住密码</el-checkbox>
      </el-checkbox-group>
      <a href="#">忘记密码</a>
    </div>
    <el-button type="primary" @click="handelLoginClick">立即登录</el-button>
  </div>
</template>

<script lang="ts">
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Vue3TsTestLoginPanel',
  components: { LoginAccount, LoginPhone },
  setup() {
    const tabsValue = ref<string>('0')
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const reactives = ref(['1'])
    const handelLoginClick = () => {
      if (tabsValue.value == '0') {
        accountRef.value?.loginAction(reactives.value)
      } else {
        console.log('手机登录')
      }
    }
    return {
      reactives,
      handelLoginClick,
      accountRef,
      tabsValue
    }
  }
})
</script>
