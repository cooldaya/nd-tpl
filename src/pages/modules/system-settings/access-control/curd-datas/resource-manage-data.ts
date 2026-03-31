import { reactive, markRaw, computed, ref, useTemplateRef } from 'vue'
import type { ComponentPublicInstance } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { defineCrudSubmit, defineCrudSearch, defineCrudBeforeOpen } from 'element-pro-components'
import type { CrudColumn, ICrudProps, ICrudMenuColumns } from 'element-pro-components'
import type { ProCrud } from 'element-pro-components'
import { get } from 'lodash-es'
import { gApi } from '@/api/gapi'
import type {
  ResourceVO,
  ResourceForm,
  ApiResourceAddPostData,
  ApiResourceEditPostData,
} from '@/api/generated/data-contracts'
import EpSearch from '~icons/ep/search'
import EpRefreshLeft from '~icons/ep/refresh-left'
import { exportProTable, listToTree, sortBySequence } from '@/utils/funcs-tool'
import AutocompleteArray from '@/components/pro-crud/AutocompleteArray.vue'

type CurdOption = {
  exportFileName?: string
  defaultForm?: Partial<ResourceForm>
}
const createCurdData = (curdOption: CurdOption | undefined = {}) => {
  const crudInstanceRef = useTemplateRef<ComponentPublicInstance<typeof ProCrud>>('crudInstanceRef')
  const curdRefData = reactive({
    form: {},
    searchForm: {},
    detail: {},
    tableData: [] as ResourceVO[],
    loading: false,
  })

  const searchMenuRightProps = reactive({
    searchFormExpand: false,
    showSearchFormExpandBtn: false,
    toggleSearchFormExpand() {
      searchMenuRightProps.searchFormExpand = !searchMenuRightProps.searchFormExpand
    },
    async exportTableData() {
      const option = {
        searchForm: curdRefData.searchForm,
        columns: refColumns.value,
      }
      const res = await gApi.apiResourcePagedListPost({
        pageIndex: 1,
        pageSize: 99,
        ...curdRefData.searchForm,
      })
      const arrData = get(res, 'data.items', [])
      const fileName = curdOption.exportFileName || '菜单管理'
      exportProTable(arrData, option.searchForm, option.columns, fileName)
    },
  })

  const paginationRefData = reactive({
    total: 0,
    pageSize: 999,
    currentPage: 1,
  })

  const curdStaticData = {
    searchProps: {
      gutter: 20,
    },
  }

  const refColumns = ref<CrudColumn[]>([
    {
      label: '名称',
      prop: 'name',
      component: 'el-input',
      add: true,
      edit: true,
      search: true,
      detail: true,
      span: 12,
      required: true,
    },

    {
      label: '权限标识',
      prop: 'code',
      component: 'el-input',
      add: true,
      edit: true,
      search: true,
      detail: true,
      span: 12,
      required: true,
    },
    {
      label: '类型',
      prop: 'type',
      component: 'pro-radio',
      add: true,
      edit: true,
      // search: true,
      detail: true,
      required: true,
      props: {
        data: [
          { value: 'directory ', label: '目录' },
          { value: 'menu', label: '菜单' },
          { value: 'button ', label: '按钮' },
        ],
      },
    },
    {
      label: '父级',
      prop: 'parentId',
      component: 'el-tree-select',
      props: {
        filterable: true,
        data: [], // 初始为空，由逻辑填充
        nodeKey: 'id',
        checkStrictly: true, // 允许选择父节点
        props: {
          children: 'children',
          label: 'name',
        },
      },
      add: true,
      edit: true,
      // search: true,
      detail: true,
      hide: true,
    },
    {
      label: '是否启用',
      prop: 'isEnable',
      component: 'el-switch',
      add: true,
      detail: true,
      span: 12,
      required: true,
    },
    {
      label: '是否仅限管理员',
      prop: 'isAdmin',
      component: 'el-switch',
      add: true,
      edit: true,
      // search: true,
      detail: true,
      span: 12,
    },
    {
      label: '备注',
      prop: 'remark',
      component: 'el-input',
      add: true,
      edit: true,
      // search: true,
      detail: true,
      props: {
        type: 'textarea',
      },
    },
    {
      label: '路由名称列表',
      prop: 'routeNames',
      add: true,
      edit: true,
      component: markRaw(AutocompleteArray),
      props: {
        // apiResourceRoutePathsPost
        fetchSuggestions: (() => {
          let list: { value: string }[] = []
          gApi.apiResourceRoutePathsPost().then((res) => {
            list = (res.data || []).map((item) => ({ value: item }))
          })
          return (queryString: string, cb: any) => {
            cb(list.filter((item) => item.value.includes(queryString)))
          }
        })(),
      },
    },
    {
      label: '部门操作',
      prop: 'cus-opts',
      component: 'el-input',
      span: 12,
    },
    // {
    //   label: 'resourceRoutes',
    //   prop: 'resourceRoutes',
    //   detail: true,
    //   add: false,
    //   edit: false,
    // },
  ])

  // 修改表单的排序
  const formColumns = computed(() =>
    sortBySequence(
      refColumns.value.filter((item) => item.add),
      'prop',
      ['parentId', 'type'],
    ),
  )

  const refSearchColumns = computed(() => {
    // 所有可搜索columns,修改required为false
    const arr1 = refColumns.value
      .filter((item: CrudColumn, idx) => item.search)
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
    submitText: '添加',
    resetText: '重置',
    detail: (_row) => true,
    edit: (_row) => true,
    del: (_row) => true,
    fixed: 'right',
    width: '180px',
  })

  const curdHandles = {
    beforeOpen: defineCrudBeforeOpen((done, type, row) => {
      const parentIdColumn = refColumns.value.find((item: CrudColumn) => item.prop === 'parentId')
      if (parentIdColumn && parentIdColumn.props) {
        parentIdColumn.props.data = curdRefData.tableData
      }

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
        (data: ResourceForm) => Promise<ApiResourceAddPostData | ApiResourceEditPostData>
      > = {
        add: gApi.apiResourceAddPost,
        edit: gApi.apiResourceEditPost,
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

    async deleteRow(row: ResourceVO) {
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
        await gApi.apiResourceRemovePost({
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
    async paginationChange(_currentPage: number, _pageSize: number) {
      curdRefData.loading = true
      try {
        const res = await gApi.apiResourceListPost({
          // pageIndex: currentPage,
          // pageSize: pageSize,
          ...curdRefData.searchForm,
        })
        const arrData = markRaw(get(res, 'data', []) as ResourceVO[])
        paginationRefData.total = arrData.length

        const treeData = listToTree(arrData)
        curdRefData.tableData = treeData
      } catch (e) {
        console.log(e)
      } finally {
        curdRefData.loading = false
      }
    },
    searchReset() {
      paginationRefData.currentPage = 1
      curdHandles.paginationChange(paginationRefData.currentPage, paginationRefData.pageSize)
    },
    refreshTable() {
      curdHandles.paginationChange(paginationRefData.currentPage, paginationRefData.pageSize)
    },
  }

  curdHandles.paginationChange(paginationRefData.currentPage, paginationRefData.pageSize)

  // 配置文档请看 https://tolking.github.io/element-pro-components/zh-CN/components/crud

  const crudProps = computed<Partial<ICrudProps>>(() => ({
    columns: refColumns.value,
    searchColumns: refSearchColumns.value,
    addColumns: formColumns.value,
    editColumns: formColumns.value,
    menu: refMenu.value,
    data: curdRefData.tableData,
    detail: curdRefData.detail,
    beforeOpen: curdHandles.beforeOpen,
    searchProps: curdStaticData.searchProps,
    onSearch: curdHandles.search,
    onSubmit: curdHandles.submit,
    onDelete: curdHandles.deleteRow,
    onSearchReset: curdHandles.searchReset,
    // total: paginationRefData.total,
    onLoad: () =>
      curdHandles.paginationChange(paginationRefData.currentPage, paginationRefData.pageSize),
    layout: '->, prev, pager, next, sizes, total',
    background: true,
    gutter: 20,
    height: 460,
    showOverflowTooltip: true,
    stripe: true,
    rowKey: 'id',
    highlightCurrentRow: true,
    tableLayout: 'auto',
  }))

  return {
    curdRefData,
    curdStaticData,
    curdHandles,
    crudProps,
    paginationRefData,
    searchMenuRightProps,
    crudInstanceRef,
  }
}

export { createCurdData }
