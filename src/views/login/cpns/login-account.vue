<!--
 * @Author       : 林青云
 * @Date         : 2022-04-18 10:16:32
 * @LastEditors  : 林青云
 * @LastEditTime : 2022-04-18 15:08:30
 * @Description  : file content
 * @FilePath     : \vue3-ts-test\src\views\login\cpns\login-account.vue
-->
<template>
  <div>
    <el-form
      label-width="100px"
      :model="formLabelAlign"
      style="max-width: 460px"
      :rules="rules"
      ref="formRef"
    >
      <el-form-item label-width="auto" label="账号" prop="name">
        <el-input v-model="formLabelAlign.name" placeholder="请输入账号" />
      </el-form-item>
      <el-form-item label-width="auto" label="密码" prop="password">
        <el-input
          v-model="formLabelAlign.password"
          placeholder="请输入密码"
          show-password
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus/lib/components'
import { defineComponent, ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { nameValidator, passwordValidator } from '../config/account'
import LocalCache from '@/utils/cache'
export default defineComponent({
  name: 'Vue3TsTestLoginAccount',
  setup() {
    const store = useStore()
    // 表单校验
    const formRef = ref<InstanceType<typeof ElForm>>()
    const formLabelAlign = reactive({
      name: LocalCache.getCache('name') || '',
      password: LocalCache.getCache('password') || ''
    })
    // 校验规则
    const rules = {
      name: [{ validator: nameValidator, trigger: 'blur', required: true }],
      password: [
        { validator: passwordValidator, trigger: 'blur', required: true }
      ]
    }
    // 登录方法
    const loginAction = (value: Array<string>) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 判断是否需要记住密码
          if (value.length > 0) {
            LocalCache.setCache('name', formLabelAlign.name)
            LocalCache.setCache('password', formLabelAlign.password)
          } else {
            LocalCache.deleteCache('password')
          }
          store.dispatch('login/accountLoginAction', { ...formLabelAlign })
        }
      })
    }
    return { formLabelAlign, rules, loginAction, formRef }
  }
})
</script>
