<template>
  <div class="login-account">
    <el-form
      label-width="60px"
      :rules="rules"
      :model="accountForm"
      ref="formRef"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="accountForm.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="accountForm.password" type="password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ElForm } from 'element-plus'
import { reactive, defineExpose, ref } from 'vue'

import { rules } from '../config/account-config'

const accountForm = reactive({
  name: '',
  password: ''
})

const formRef = ref<InstanceType<typeof ElForm>>()
const loginAction = () => {
  formRef.value?.validate((valid) => {
    if (valid) {
      console.log('登入逻辑')
    }
  })
}
defineExpose({ loginAction })
</script>

<style scoped lang="less"></style>
