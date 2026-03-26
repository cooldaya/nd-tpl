<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { reactive, onMounted, computed, watch } from 'vue'
import { defineFormSubmit } from 'element-pro-components'
import { ElMessage } from 'element-plus'

// 表单操作类型定义
const FROMOPRATIONTYPE = {
  ADD: 'add',
  EDIT: 'edit',
  VIEW: 'view',
} as const

type OperationType = (typeof FROMOPRATIONTYPE)[keyof typeof FROMOPRATIONTYPE]

interface ApiConfig {
  add?: (data: Record<string, any>) => Promise<any>
  edit?: (data: Record<string, any>) => Promise<any>
  detail?: (params: any) => Promise<any>
}

const props = defineProps<{
  operationType?: OperationType
  apiConfig?: ApiConfig
  params?: Record<string, any> // 详情请求参数或初始参数
  columns: any[] // 表单配置
  beforeInit?: (data: any) => any // 初始化前处理
  beforeSubmit?: (data: any) => any | boolean // 提交前处理，返回 false 则拦截
  afterSubmit?: (res: any) => void // 提交后回调
}>()

const emit = defineEmits(['update:modelValue', 'submit-success', 'submit-error'])

// 响应式表单数据
const formData = reactive<Record<string, any>>({})

// 是否只读模式
const isReadOnly = computed(() => props.operationType === FROMOPRATIONTYPE.VIEW)

// 是否显示提交按钮 (查看模式下隐藏按钮)
const hideMenu = computed(() => props.operationType === FROMOPRATIONTYPE.VIEW)

/**
 * 初始化数据
 */
const initData = async () => {
  if (
    (props.operationType === FROMOPRATIONTYPE.EDIT ||
      props.operationType === FROMOPRATIONTYPE.VIEW) &&
    props.apiConfig?.detail
  ) {
    try {
      const res = await props.apiConfig.detail(props.params)
      let data = res.data || res
      if (props.beforeInit) {
        data = props.beforeInit(data)
      }
      Object.assign(formData, data)
    } catch (error) {
      console.error('Failed to initialize form data:', error)
      ElMessage.error('获取详情数据失败')
    }
  } else if (props.params) {
    // ADD 模式下如果有初始参数，也填充进去
    Object.assign(formData, props.params)
  }
}

/**
 * 提交逻辑
 */
const handleSubmit = defineFormSubmit(async (done, isValid) => {
  if (!isValid) return done()

  let submitData = { ...formData }

  // 提交前拦截处理
  if (props.beforeSubmit) {
    const processed = props.beforeSubmit(submitData)
    if (processed === false) return done()
    if (typeof processed === 'object') {
      submitData = processed
    }
  }

  try {
    let res
    if (props.operationType === FROMOPRATIONTYPE.ADD && props.apiConfig?.add) {
      res = await props.apiConfig.add(submitData)
    } else if (props.operationType === FROMOPRATIONTYPE.EDIT && props.apiConfig?.edit) {
      res = await props.apiConfig.edit(submitData)
    }

    if (res) {
      ElMessage.success('保存成功')
      emit('submit-success', res)
      if (props.afterSubmit) {
        props.afterSubmit(res)
      }
    }
  } catch (error) {
    console.error('Submit error:', error)
    emit('submit-error', error)
  } finally {
    done()
  }
})

onMounted(() => {
  initData()
})

// 监听参数变化重新初始化 (如果业务需要)
watch(
  () => props.params,
  () => {
    initData()
  },
  { deep: true },
)

// 暴露给父组件的方法
defineExpose({
  formData,
  reset: () => {
    Object.keys(formData).forEach((key) => delete formData[key])
    initData()
  },
})
</script>

<template>
  <div class="ae-pro-form nd-wh-full">
    <pro-form
      v-model="formData"
      :columns="props.columns"
      :readonly="isReadOnly"
      :menu="hideMenu ? { submit: false, reset: false } : undefined"
      v-bind="$attrs"
      @submit="handleSubmit"
    >
      <!-- 透明转发插槽 -->
      <template v-for="(_, name) in $slots" #[name]="slotProps">
        <slot :name="name" v-bind="slotProps"></slot>
      </template>
    </pro-form>
  </div>
</template>
