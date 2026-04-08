import { reactive, markRaw, computed, ref, useTemplateRef } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { get, isFunction } from 'lodash-es'
import { gApi } from '@/api/gapi'
import {
  defineCrudSubmit,
  defineCrudSearch,
  defineCrudBeforeOpen,
} from 'element-pro-components'
import EpSearch from '~icons/ep/search'
import EpRefreshLeft from '~icons/ep/refresh-left'
import { exportProTable, sortBySequence } from '@/utils/funcs-tool'
import { useAuthStore } from '@/stores/auth'

import type {ComponentPublicInstance} from 'vue'
import type { CrudColumn, ICrudProps, ICrudMenuColumns,ProCrud } from 'element-pro-components'
import type {
  UserVO,
  UserForm,
  ApiUserAddPostData,
  ApiUserEditPostData,
} from '@/api/generated/data-contracts'




type CrudOption = {
  exportFileName?: string
  defaultForm?: Partial<UserForm>
}
const createCrudData = (crudOption: CrudOption | undefined = {}) => {
  const authStore = useAuthStore()
  const crudInstanceRef = useTemplateRef<ComponentPublicInstance<typeof ProCrud>>('crudInstanceRef')
  const crudRefData = reactive({
    form: {} as UserForm,
    searchForm: {},
    detail: {},
    tableData: [] as UserVO[],
  })

  const searchMenuRightProps = reactive({
    searchFormExpand: false,
    showSearchFormExpandBtn:false,
    toggleSearchFormExpand() {
      searchMenuRightProps.searchFormExpand = !searchMenuRightProps.searchFormExpand
    },
    async exportTableData() {
      const option = {
        searchForm: crudRefData.searchForm,
        columns: refColumns.value,
      }
      const res = await gApi.apiUserPagedListPost({
        pageIndex: 1,
        pageSize: 99,
        ...crudRefData.searchForm,
      })
      const arrData = get(res, 'data.items', [])
      const fileName = crudOption.exportFileName || '测试crud'
      exportProTable(arrData, option.searchForm, option.columns, fileName)
    },
  })

  const paginationRefData = reactive({
    total: 0,
    pageSize: 10,
    currentPage: 1,
  })

  const crudStaticData = {
    searchProps: {
      gutter: 20,
    },
  }

  const refColumns = ref<CrudColumn[]>([
    {
      label: '登录名',
      prop: 'loginname',
      component: 'el-input',
      add: true,
      edit: true,
      search: false,
      detail: true,
      span: 12,
    },
    {
      label: '密码',
      prop: 'password',
      component: 'el-input',
      add: true,
      edit: true,
      search: false,
      detail: true,
      span: 12,
    },
    {
      label: '编号',
      prop: 'code',
      component: 'el-input',
      add: true,
      edit: true,
      search: false,
      detail: true,
      span: 12,
    },
    {
      label: '姓名',
      prop: 'name',
      component: 'el-input',
      add: true,
      edit: true,
      search: false,
      detail: true,
      span: 12,
    },
    {
      label: '邮箱',
      prop: 'email',
      component: 'el-input',
      add: true,
      edit: true,
      search: false,
      detail: true,
      span: 12,
    },
    {
      label: '身份证号码',
      prop: 'idcode',
      component: 'el-input',
      add: true,
      edit: true,
      search: false,
      detail: true,
      span: 12,
    },
    {
      label: '性别',
      prop: 'sex',
      component: 'el-input',
      add: true,
      edit: true,
      search: false,
      detail: true,
      span: 12,
    },
    {
      label: '民族',
      prop: 'nation',
      component: 'el-input',
      add: true,
      edit: true,
      search: false,
      detail: true,
      span: 12,
    },
    {
      label: '出生日期',
      prop: 'birthday',
      component: 'el-input',
      add: true,
      edit: true,
      search: false,
      detail: true,
      span: 12,
    },
    {
      label: '手机号',
      prop: 'mobile',
      component: 'el-input',
      add: true,
      edit: true,
      search: false,
      detail: true,
      span: 12,
    },
    {
      label: '微信openid',
      prop: 'wxopenid',
      component: 'el-input',
      add: true,
      edit: true,
      search: false,
      detail: true,
      span: 12,
    },
    {
      label: '微信unionid',
      prop: 'wxunionid',
      component: 'el-input',
      add: true,
      edit: true,
      search: false,
      detail: true,
      span: 12,
    },
    {
      label: '地址',
      prop: 'address',
      component: 'el-input',
      add: true,
      edit: true,
      search: false,
      detail: true,
      span: 12,
    },
    {
      label: '是否可以登录',
      prop: 'canLogin',
      component: 'el-input',
      add: true,
      edit: true,
      search: false,
      detail: true,
      span: 12,
    },
    {
      label: '是否启用',
      prop: 'isEnable',
      component: 'el-input',
      add: true,
      edit: true,
      search: false,
      detail: true,
      span: 12,
    },
    {
      label: 'maxNos',
      prop: 'maxNos',
      component: 'el-input',
      add: true,
      edit: true,
      search: false,
      detail: true,
      span: 12,
    },
    {
      label: 'remark',
      prop: 'remark',
      component: 'el-input',
      add: true,
      edit: true,
      search: false,
      detail: true,
      span: 12,
    },
    {
      label: 'organizationId',
      prop: 'organizationId',
      component: 'el-input',
      add: true,
      edit: true,
      search: false,
      detail: true,
      span: 12,
    },
    {
      label: 'ssoid',
      prop: 'ssoId',
      component: 'el-input',
      add: true,
      edit: true,
      search: false,
      detail: true,
      span: 12,
    },
    {
      label: 'typeCode',
      prop: 'typeCode',
      component: 'el-input',
      add: true,
      edit: true,
      search: false,
      detail: true,
      span: 12,
    },
    {
      label: '上次登录时间',
      prop: 'lastLoginTime',
      component: 'el-input',
      add: true,
      edit: true,
      search: false,
      detail: true,
      span: 12,
    },
    {
      label: '组织机构名称',
      prop: 'organizationName',
      component: 'el-input',
      add: true,
      edit: true,
      search: false,
      detail: true,
      span: 12,
    },
  ])

  // 初始化调用每一个column?.props?.reqFunc函数
  refColumns.value.forEach((column) => {
    const reqFunc = column?.props?.reqFunc
    if (isFunction(reqFunc)) {
      reqFunc(column)
    }
  })

  // 修改表单的排序
  const formColumns = computed(() =>
    sortBySequence(
      refColumns.value.filter((item) => item.add),
      'prop',
      ['parentId', 'type'],
    ),
  )

  const addFormColumns = computed(() => formColumns.value.filter((item) => item.add))
  const editFormColumns = computed(() => formColumns.value.filter((item) => item.edit))


  const refSearchColumns = computed(() => {
    // 所有可搜索columns,修改required为false
    const arr1 = refColumns.value
      .filter((item: CrudColumn) => item.search)
      .map((item) => ({
        ...item,
        required: false,
      }))
    // 按属性字段排序，折叠筛选部分字段
    const arr = sortBySequence(arr1, 'prop', []).filter((item, idx) =>
      searchMenuRightProps.searchFormExpand ? true : idx < 3,
    )
    searchMenuRightProps.showSearchFormExpandBtn = arr.length > 2
    return arr
  })

  const refMenu = computed<ICrudMenuColumns>(() => ({
      // 权限控制---
    detail: (_row) => authStore.hasPerm('user-test:detail'),
    edit: (_row) => authStore.hasPerm('user-test:edit'),
    del: (_row) => authStore.hasPerm('user-test:del'),
    add: authStore.hasPerm('user-test:add'),
    // ---
    label: '操作',
    addText: '新增',
    detailText: '详情',
    editText: '编辑',
    delText: '删除',
    searchText: '搜索',
    searchProps: {
      icon: EpSearch,
      type: 'primary',
      plain: true,
    },
    searchResetText: '重置',
    searchResetProps: {
      icon: EpRefreshLeft,
      type: 'info',
    },
    submitText: '提交',
    resetText: '重置',
    fixed: 'right',
    width: '180px',
  }))

  const crudHandles = {
    beforeOpen: defineCrudBeforeOpen((done, type, row) => {
      const actions = {
        edit: () => (crudRefData.form = row || {}),
        detail: () => (crudRefData.detail = row || {}),
        add: () => Object.assign(crudRefData.form, crudOption.defaultForm),
      }
      actions[type]?.()
      done()
    }),

    search: defineCrudSearch(async (done, _isValid, _invalidFields) => {
      try {
        await crudHandles.paginationChange(
          paginationRefData.currentPage,
          paginationRefData.pageSize,
        )
      } catch (e) {
        console.error(e)
      } finally {
        done()
      }
    }),

    submit: defineCrudSubmit(async (close, done, type, _isValid, _invalidFields) => {
      const reqFuncMap: Record<
        string,
        (data: UserForm) => Promise<ApiUserAddPostData | ApiUserEditPostData>
      > = {
        add: gApi.apiUserAddPost,
        edit: gApi.apiUserEditPost,
      }
      const reqFunc = reqFuncMap[type]

      if (!reqFunc) {
        ElMessage.error('操作类型错误')
        return
      }
      try {
        await reqFunc(crudRefData.form)
        ElMessage.success('操作成功')
        close()
        await crudHandles.paginationChange(
          paginationRefData.currentPage,
          paginationRefData.pageSize,
        )
      } catch (e) {
        console.error(e)
      } finally {
        done()
      }
    }),

    async deleteRow(row: UserVO) {
      try {
        await ElMessageBox.confirm('确认要删除该条数据吗？', '警告', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
      } catch (e) {
        console.log(e)
        return ElMessage.info('已取消删除')
      }
      try {
        await gApi.apiUserRemovePost({
          id: row.id,
        })
        ElMessage.success('删除成功')
        await crudHandles.paginationChange(
          paginationRefData.currentPage,
          paginationRefData.pageSize,
        )
      } catch (e) {
        console.error(e)
      }
    },
    async paginationChange(currentPage: number, pageSize: number) {
      const res = await gApi.apiUserPagedListPost({
        pageIndex: currentPage,
        pageSize: pageSize,
        ...crudRefData.searchForm,
      })
      paginationRefData.total = get(res, 'data.total', 0)
      crudRefData.tableData = markRaw(get(res, 'data.items', []) as UserVO[])
    },
    searchReset() {
      paginationRefData.currentPage = 1
      crudHandles.paginationChange(paginationRefData.currentPage, paginationRefData.pageSize)
    },
  }

  crudHandles.paginationChange(paginationRefData.currentPage, paginationRefData.pageSize)

  // 配置文档请看 https://tolking.github.io/element-pro-components/zh-CN/components/crud

  const crudProps = computed<Partial<ICrudProps>>(() => ({
    columns: refColumns.value,
    searchColumns: refSearchColumns.value,
    addColumns: addFormColumns.value,
    editColumns: editFormColumns.value,
    menu: refMenu.value,
    data: crudRefData.tableData,
    detail: crudRefData.detail,
    beforeOpen: crudHandles.beforeOpen,
    searchProps: crudStaticData.searchProps,
    onSearch: crudHandles.search,
    onSubmit: crudHandles.submit,
    onDelete: crudHandles.deleteRow,
    onSearchReset: crudHandles.searchReset,
    total: paginationRefData.total,
    onLoad: () =>
      crudHandles.paginationChange(paginationRefData.currentPage, paginationRefData.pageSize),
    layout: '->, prev, pager, next, sizes, total',
    background: true,
    gutter: 20,
    height: 460,
    showOverflowTooltip: true,
    stripe: true,
  }))

  return {
    crudRefData,
    crudStaticData,
    crudHandles,
    crudProps,
    paginationRefData,
    searchMenuRightProps,
    crudInstanceRef
  }
}

export { createCrudData }
