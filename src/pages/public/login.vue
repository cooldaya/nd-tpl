<script setup lang="ts">
import { ref, reactive, useTemplateRef } from 'vue'
import { defineFormColumns, defineFormMenuColumns, defineFormSubmit } from 'element-pro-components'
import ArithmeticCaptcha from '@/components/public/ArithmeticCaptcha.vue'
import { ElMessage } from 'element-plus'

definePage({
  name: 'login',
})

const captchaElRef = useTemplateRef<typeof ArithmeticCaptcha>('captchaElRef')

const refData = reactive({
  form: {
    username: 'admin',
    password: 'Szxsd586!',
    valicode: '',
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
  ]),
  menu: defineFormMenuColumns({
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
  }),
})

const handles = {
  submit: defineFormSubmit((done, isValid) => {
    if (!isValid) return done()
    setTimeout(() => {
      done()
    }, 1200)
  }),
}
</script>

<template>
  <div class="nd-wh-full nd-fcc login-page">
    <div class="w-200 flex h-120 rounded-sm overflow-hidden shadow-xl bg-white/85 backdrop-blur-md">
      <div class="w-60 relative">
        <img src="@/assets/imgs/public/p1.png" class="w-full h-full object-cover" />
        <div class="font-bold text-xl absolute left-0.5 top-6 text-[26px] leading-[1.6] p-4">
          <span class="text-[#1e4c40]"> 石柱<br />小水电站生态流量监测系统 </span>
        </div>
      </div>
      <div class="w-140 pl-14 text-2xl font-medium pr-20">
        <div class="pt-24">Welcome</div>
        <div class="mt-6">
          <pro-form
            v-model="refData.form"
            :columns="refData.columns"
            label-width="0"
            @submit="handles.submit"
            label-position="left"
            :menu="refData.menu"
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
  --left-pecent: 44%;

  background-image: linear-gradient(
    82deg,
    #1e4c40 var(--left-pecent),
    #428673 var(--left-pecent),
    #428673
  );
}
</style>
