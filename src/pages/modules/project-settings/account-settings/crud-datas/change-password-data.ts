import { reactive, computed } from 'vue'
import { gApi } from '@/api/gapi'
import { remotePkRsaEncrypt } from '@/api/app-api/auth'
import { useAuthStore } from '@/stores/auth'
import { ElMessage } from 'element-plus'

import type { UserResetPwdQO } from '@/api/generated/data-contracts'
import type { IFormProps } from 'element-pro-components'

const authStore = useAuthStore()

type UserResetPwdQOExt = UserResetPwdQO & { username?: string }
const createCpData = () => {
  const cpRefData = reactive<{
    form: UserResetPwdQOExt
  }>({
    form: {
      oldPassword: '',
      newPassword: '',
      username: authStore.authRefData.userInfo?.loginname!,
    },
  })
  const proFormProps = computed<Partial<IFormProps>>(() => ({
    columns: [
      {
        label: '登录名称',
        prop: 'username',
        component: 'el-input',
        props: {
          disabled: true,
        },
      },
      {
        label: '旧密码',
        prop: 'oldPassword',
        component: 'el-input',
        required: true,
        props: {
          type: 'password',
        },
      },
      {
        label: '新密码',
        prop: 'newPassword',
        component: 'el-input',
        required: true,
        props: {
          type: 'password',
        },
      },
      {
        label: '确认密码',
        prop: 'confirmPassword',
        component: 'el-input',
        required: true,
        props: {
          type: 'password',
        },
        rules: [
          {
            validator: (rule, value, callback) => {
              if (value !== cpRefData.form.newPassword) {
                callback(new Error('两次输入的密码不一致'))
              } else {
                callback()
              }
            },
          },
        ],
      },
    ],
    menu: {
      submitText: '提交',
      reset: false,
    },
  }))

  const cpHandles = {
    async submit(done: () => void, _isValid: boolean) {
      const encryptednpwd = await remotePkRsaEncrypt(cpRefData.form.newPassword!)
      const encryptedopwd = await remotePkRsaEncrypt(cpRefData.form.oldPassword!)
      await gApi.apiUserResetPwdPost({
        oldPassword: encryptedopwd,
        newPassword: encryptednpwd,
      })
      ElMessage.success('修改成功')
      done()
    },
  }
  return {
    cpRefData,
    proFormProps,
    cpHandles,
  }
}

export { createCpData }
