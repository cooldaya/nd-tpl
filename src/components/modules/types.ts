import { type ExtractPropTypes } from 'vue'
import { formProps } from 'element-pro-components'

/* eslint-disable @typescript-eslint/no-explicit-any */
// 表单操作类型定义
export const FROMOPRATIONTYPE = {
  ADD: 'add',
  EDIT: 'edit',
  VIEW: 'view',
} as const

export type OperationType = (typeof FROMOPRATIONTYPE)[keyof typeof FROMOPRATIONTYPE]

export interface ApiConfig<T> {
  add?: (data: T) => Promise<any>
  edit?: (data: T) => Promise<any>
  detail?: (params: any) => Promise<NonNullable<T>>
}

export interface AeProFormProps<T = Record<string, any>> {
  operationType?: OperationType
  apiConfig?: ApiConfig<T>
  params?: Record<string, any> // 详情请求参数或初始参数
  proFormProps?: Partial<ExtractPropTypes<typeof formProps>>
  beforeInit?: (data: any) => any // 初始化前处理
  beforeSubmit?: (data: any) => any | boolean // 提交前处理，返回 false 则拦截
  afterSubmit?: (res: any) => void // 提交后回调
}
