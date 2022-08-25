<template>
  <div class="login-phone">
    <el-form label-width="60px">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="phoneForm.phone" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phoneForm.code" type="password" />
          <el-button type="primary" class="get-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
const phoneForm = reactive({
  phone: '',
  code: ''
})
</script>

<style scoped lang="less">
.get-code {
  display: flex;
}
.get-btn {
  margin-left: 8px;
}
</style>
