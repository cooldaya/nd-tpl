<script setup lang="ts">
import { reactive, onMounted, computed, watch, ref } from 'vue'
import { defineFormSubmit } from 'element-pro-components'
import { ElMessage } from 'element-plus'
import type { AeProFormProps } from './types'
import { FROMOPRATIONTYPE } from './types'
import { formProps } from 'element-pro-components'
import type { ExtractPropTypes } from 'vue'

const props = defineProps<AeProFormProps>()

const loading = ref(false)

const emit = defineEmits(['update:modelValue', 'submit-success', 'submit-error'])

// 响应式表单数据
let formData = reactive<Record<string, unknown>>({})

// 是否只读模式
const isReadOnly = computed(() => props.operationType === FROMOPRATIONTYPE.VIEW)

// // 是否显示提交按钮 (查看模式下隐藏按钮)
type MenuType = ExtractPropTypes<typeof formProps>['menu']

const aeProMenu = computed<MenuType>(() => {
  const rawMenu = props.proFormProps?.menu
  if (!rawMenu) return undefined
  const changeMenu: Partial<MenuType> = {
    reset: rawMenu.reset === false ? false : !isReadOnly.value,
    submit: rawMenu.submit === false ? false : !isReadOnly.value,
  }
  return { ...rawMenu, ...changeMenu }
})

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
      loading.value = true
      const res = await props.apiConfig.detail(props.params)
      let data = res.data || res
      if (props.beforeInit) {
        data = props.beforeInit(data)
      }
      Object.assign(formData, data)
    } catch (error) {
      console.error('Failed to initialize form data:', error)
      ElMessage.error('获取详情数据失败')
    } finally {
      loading.value = false
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
    loading.value = true
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
    loading.value = false
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
  <pro-form
    v-model="formData"
    v-bind="props.proFormProps"
    :menu="aeProMenu"
    @submit="handleSubmit"
    :disabled="isReadOnly"
    v-loading="loading"
  >
    <!-- 透明转发插槽 -->
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps"></slot>
    </template>
  </pro-form>
</template>
