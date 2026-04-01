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

import type {ComponentPublicInstance} from 'vue'
import type { CrudColumn, ICrudProps, ICrudMenuColumns,ProCrud } from 'element-pro-components'
import type {
  LogoperationVO,
  LogoperationForm,
  ApiLogoperationAddPostData,
  ApiLogoperationEditPostData,
} from '@/api/generated/data-contracts'




type CurdOption = {
  exportFileName?: string
  defaultForm?: Partial<LogoperationForm>
}
const createCurdData = (curdOption: CurdOption | undefined = {}) => {
  const crudInstanceRef = useTemplateRef<ComponentPublicInstance<typeof ProCrud>>('crudInstanceRef')
  const curdRefData = reactive({
    form: {},
    searchForm: {},
    detail: {},
    tableData: [] as LogoperationVO[],
  })

  const searchMenuRightProps = reactive({
    searchFormExpand: false,
    showSearchFormExpandBtn:false,
    toggleSearchFormExpand() {
      searchMenuRightProps.searchFormExpand = !searchMenuRightProps.searchFormExpand
    },
    async exportTableData() {
      const option = {
        searchForm: curdRefData.searchForm,
        columns: refColumns.value,
      }
      const res = await gApi.apiLogoperationPagedListPost({
        pageIndex: 1,
        pageSize: 99,
        ...curdRefData.searchForm,
      })
      const arrData = get(res, 'data.items', [])
      const fileName = curdOption.exportFileName || '操作日志'
      exportProTable(arrData, option.searchForm, option.columns, fileName)
    },
  })

  const paginationRefData = reactive({
    total: 0,
    pageSize: 10,
    currentPage: 1,
  })

  const curdStaticData = {
    searchProps: {
      gutter: 20,
    },
  }

  const refColumns = ref<CrudColumn[]>([
    {
      label: '操作用户标识',
      prop: 'userId',
      component: 'el-input',
      add: true,
      edit: true,
      search: false,
      detail: true,
      span: 12,
    },
    {
      label: '是否异常',
      prop: 'isException',
      component: 'el-input',
      add: true,
      edit: true,
      search: false,
      detail: true,
      span: 12,
    },
    {
      label: 'controller',
      prop: 'controller',
      component: 'el-input',
      add: true,
      edit: true,
      search: false,
      detail: true,
      span: 12,
    },
    {
      label: 'action',
      prop: 'action',
      component: 'el-input',
      add: true,
      edit: true,
      search: false,
      detail: true,
      span: 12,
    },
    {
      label: 'ip',
      prop: 'ip',
      component: 'el-input',
      add: true,
      edit: true,
      search: false,
      detail: true,
      span: 12,
    },
    {
      label: '请求地址',
      prop: 'requestUrl',
      component: 'el-input',
      add: true,
      edit: true,
      search: false,
      detail: true,
      span: 12,
    },
    {
      label: '远程地址',
      prop: 'refererUrl',
      component: 'el-input',
      add: true,
      edit: true,
      search: false,
      detail: true,
      span: 12,
    },
    {
      label: '操作时间(毫秒)',
      prop: 'timeElapsed',
      component: 'el-input',
      add: true,
      edit: true,
      search: false,
      detail: true,
      span: 12,
    },
    {
      label: '参数',
      prop: 'parameters',
      component: 'el-input',
      add: true,
      edit: true,
      search: false,
      detail: true,
      span: 12,
    },
    {
      label: '环境',
      prop: 'environment',
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

  const refMenu = ref<ICrudMenuColumns>({
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
    detail: (_row) => true,
    edit: (_row) => true,
    del: (_row) => true,
    fixed: 'right',
    width: '180px',
  })

  const curdHandles = {
    beforeOpen: defineCrudBeforeOpen((done, type, row) => {
      const actions = {
        edit: () => (curdRefData.form = row || {}),
        detail: () => (curdRefData.detail = row || {}),
        add: () => Object.assign(curdRefData.form, curdOption.defaultForm),
      }
      actions[type]?.()
      done()
    }),

    search: defineCrudSearch(async (done, _isValid, _invalidFields) => {
      try {
        await curdHandles.paginationChange(
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
        (data: LogoperationForm) => Promise<ApiLogoperationAddPostData | ApiLogoperationEditPostData>
      > = {
        add: gApi.apiLogoperationAddPost,
        edit: gApi.apiLogoperationEditPost,
      }
      const reqFunc = reqFuncMap[type]

      if (!reqFunc) {
        ElMessage.error('操作类型错误')
        return
      }
      try {
        await reqFunc(curdRefData.form)
        ElMessage.success('操作成功')
        close()
        await curdHandles.paginationChange(
          paginationRefData.currentPage,
          paginationRefData.pageSize,
        )
      } catch (e) {
        console.error(e)
      } finally {
        done()
      }
    }),

    async deleteRow(row: LogoperationVO) {
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
        await gApi.apiLogoperationRemovePost({
          id: row.id,
        })
        ElMessage.success('删除成功')
        await curdHandles.paginationChange(
          paginationRefData.currentPage,
          paginationRefData.pageSize,
        )
      } catch (e) {
        console.error(e)
      }
    },
    async paginationChange(currentPage: number, pageSize: number) {
      const res = await gApi.apiLogoperationPagedListPost({
        pageIndex: currentPage,
        pageSize: pageSize,
        ...curdRefData.searchForm,
      })
      paginationRefData.total = get(res, 'data.total', 0)
      curdRefData.tableData = markRaw(get(res, 'data.items', []) as LogoperationVO[])
    },
    searchReset() {
      paginationRefData.currentPage = 1
      curdHandles.paginationChange(paginationRefData.currentPage, paginationRefData.pageSize)
    },
  }

  curdHandles.paginationChange(paginationRefData.currentPage, paginationRefData.pageSize)

  // 配置文档请看 https://tolking.github.io/element-pro-components/zh-CN/components/crud

  const crudProps = computed<Partial<ICrudProps>>(() => ({
    columns: refColumns.value,
    searchColumns: refSearchColumns.value,
    addColumns: addFormColumns.value,
    editColumns: editFormColumns.value,
    menu: refMenu.value,
    data: curdRefData.tableData,
    detail: curdRefData.detail,
    beforeOpen: curdHandles.beforeOpen,
    searchProps: curdStaticData.searchProps,
    onSearch: curdHandles.search,
    onSubmit: curdHandles.submit,
    onDelete: curdHandles.deleteRow,
    onSearchReset: curdHandles.searchReset,
    total: paginationRefData.total,
    onLoad: () =>
      curdHandles.paginationChange(paginationRefData.currentPage, paginationRefData.pageSize),
    layout: '->, prev, pager, next, sizes, total',
    background: true,
    gutter: 20,
    height: 460,
    showOverflowTooltip: true,
    stripe: true,
  }))

  return {
    curdRefData,
    curdStaticData,
    curdHandles,
    crudProps,
    paginationRefData,
    searchMenuRightProps,
    crudInstanceRef
  }
}

export { createCurdData }
