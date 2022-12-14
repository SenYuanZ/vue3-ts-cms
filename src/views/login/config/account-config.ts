// 表单验证规则
export const rules = {
  name: [
    { required: true, message: '账号不能为空!!!', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '账号必须是5-10个字母或者数字',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '密码不能为空!!!', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须是3位以上个字母或者数字',
      trigger: 'blur'
    }
  ]
}
