<script setup lang="ts">
import { reactive, useTemplateRef } from 'vue'
import { defineFormColumns, defineFormSubmit } from 'element-pro-components'
import ArithmeticCaptcha from '@/components/public/ArithmeticCaptcha.vue'
import { appApi } from '@/api/app-api'
import { useAuthStore } from '@/stores/auth'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { projectConfig } from '~/project-config'
import { rememberAccountTool } from '@/utils/rp-tool'
import type { IFormMenuColumns } from 'element-pro-components'

definePage({
  name: 'login',
})

const captchaElRef = useTemplateRef<typeof ArithmeticCaptcha>('captchaElRef')

const refData = reactive({
  form: {
    username: '',
    password: '',
    valicode: '',
    rememberAccount: true,
  },
  columns: defineFormColumns([
    {
      label: '',
      prop: 'username',
      component: 'el-input',
      rules: [
        {
          required: true,
          message: '请输入用户名',
        },
      ],
      size: 'large',
      props: {
        placeholder: '用户名',
      },
    },
    {
      label: '',
      prop: 'password',
      component: 'el-input',
      rules: [
        {
          required: true,
          message: '请输入密码',
        },
      ],
      size: 'large',
      props: {
        placeholder: '密码',
        type: 'password',
      },
    },
    {
      label: '',
      prop: 'valicode',
      component: 'el-input',
      rules: [
        {
          required: true,
          message: '请输入验证码',
        },
        {
          validator: (rule, value, callback) => {
            if (!captchaElRef.value) return callback()
            const isValid = captchaElRef.value.validate(+value)
            if (!isValid) return callback(new Error('验证码不正确'))
            callback()
          },
        },
      ],
      size: 'large',
      props: {
        placeholder: '验证码',
      },
    },
    {
      label: '',
      prop: 'rememberAccount',
      component: 'el-checkbox',
      props: {
        label: '记住我',
      },
    },
  ]),
  menu: {
    submitText: '登录',
    submitProps: {
      size: 'large',
      type: 'primary',
      style: {
        width: '200px',
      },
    },
    resetText: '重置',
    resetProps: {
      size: 'large',
      style: {
        width: '200px',
      },
    },
  } as IFormMenuColumns,
})

const authStore = useAuthStore()
const router = useRouter()

const handles = {
  submit: defineFormSubmit(async (done, isValid) => {
    const gcap = () => captchaElRef.value?.generateCaptcha()
    if (!isValid) {
      gcap()
      return done()
    }
    try {
      const res = await appApi.auth.apiLogin({
        username: refData.form.username,
        password: refData.form.password,
      })
      if (!res.data) {
        ElMessage.error('用户名或密码错误')
        gcap()
        return done()
      }
      if (refData.form.rememberAccount) {
        await rememberAccountTool.saveRememberAccount({
          username: refData.form.username,
          password: refData.form.password,
        })
      } else {
        rememberAccountTool.clearRememberAccount()
      }
      await authStore.initLoginInfo(res.data)
      done()
      router.push({
        name: 'dashboard-main',
      })
    } catch (e) {
      ElMessage.error('登录失败')
      gcap()
      return done()
    }
  }),
  async tryRememberAccountFillIn() {
    const rememberAccount = await rememberAccountTool.getRememberAccount()
    if (rememberAccount) {
      refData.form.username = rememberAccount.username
      refData.form.password = rememberAccount.password
    }
  },
}

handles.tryRememberAccountFillIn()
</script>

<template>
  <div class="nd-wh-full nd-fcc login-page">
    <div class="w-200 flex h-120 rounded-sm overflow-hidden shadow-xl bg-white/85 backdrop-blur-md">
      <div class="w-60 relative">
        <img src="@/assets/imgs/public/p1.png" class="w-full h-full object-cover" />
        <div class="font-bold text-xl absolute left-0.5 top-6 text-[26px] leading-[1.6] p-4">
          <span class="text-[#1e4c40]">
            {{ projectConfig.title }}<br />{{ projectConfig.subTitle }}
          </span>
        </div>
      </div>
      <div class="w-140 pl-14 text-2xl font-medium pr-20">
        <div class="pt-24 text-black">Welcome</div>
        <div class="mt-6">
          <pro-form
            v-model="refData.form"
            :columns="refData.columns"
            label-width="0"
            @submit="handles.submit"
            label-position="top"
            :menu="refData.menu"
            class="menu-between"
          >
            <template #form-valicode="{ value, setValue }">
              <div class="flex items-center w-full">
                <el-input
                  :model-value="value"
                  @update:model-value="setValue"
                  placeholder="验证码"
                />
                <ArithmeticCaptcha
                  class="ml-2 outline-1 outline-[#428673]"
                  :height="40"
                  ref="captchaElRef"
                />
              </div>
            </template>
          </pro-form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-page {
  ::v-deep(.el-form-item__label) {
    &::before {
      display: none;
    }
    padding: 0;
  }
  ::v-deep(.el-form-item) {
    margin-bottom: 14px;
    display: flex;
  }

  /* 选中内部包含 .el-checkbox 的 .el-form-item */
  ::v-deep(.el-form-item:has(.el-checkbox)) {
    .el-form-item__content {
      display: flex;
      justify-content: flex-end;
    }
  }

  --left-pecent: 44%;

  background-image: linear-gradient(
    82deg,
    #1e4c40 var(--left-pecent),
    #428673 var(--left-pecent),
    #428673
  );
}
</style>
