import { reactive, markRaw, computed, ref, useTemplateRef, h, nextTick } from 'vue'
import type { ComponentPublicInstance } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { defineCrudSubmit, defineCrudSearch, defineCrudBeforeOpen } from 'element-pro-components'
import type { CrudColumn, ICrudProps, ICrudMenuColumns } from 'element-pro-components'
import type { ProCrud } from 'element-pro-components'
import { get, isFunction } from 'lodash-es'
import { gApi } from '@/api/gapi'
import type {
  ResourceVO,
  ResourceForm,
  ApiResourceAddPostData,
  ApiResourceEditPostData,
} from '@/api/generated/data-contracts'
import type { RouteRecordNormalized } from 'vue-router'
import EpSearch from '~icons/ep/search'
import EpRefreshLeft from '~icons/ep/refresh-left'
import { exportProTable, listToTree, sortBySequence } from '@/utils/funcs-tool'
import AutocompleteArray from '@/components/pro-crud/AutocompleteArray.vue'
import { ElButton } from 'element-plus'
import { useRouter } from 'vue-router'
import { ElTreeSelect } from 'element-plus'

type CrudOption = {
  exportFileName?: string
  defaultForm?: Partial<ResourceForm>
}
const createCrudData = (crudOption: CrudOption | undefined = {}) => {
  const crudInstanceRef = useTemplateRef<ComponentPublicInstance<typeof ProCrud>>('crudInstanceRef')
  const crudRefData = reactive({
    form: {} as ResourceForm,
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
        searchForm: crudRefData.searchForm,
        columns: refColumns.value,
      }
      const res = await gApi.apiResourcePagedListPost({
        pageIndex: 1,
        pageSize: 99,
        ...crudRefData.searchForm,
      })
      const arrData = get(res, 'data.items', [])
      const fileName = crudOption.exportFileName || '菜单管理'
      exportProTable(arrData, option.searchForm, option.columns, fileName)
    },
  })

  const paginationRefData = reactive({
    total: 0,
    pageSize: 999,
    currentPage: 1,
  })

  const crudStaticData = {
    searchProps: {
      gutter: 20,
    },
  }

  const router = useRouter()
  type ParentIdTreeElRefType = InstanceType<typeof ElTreeSelect> | null
  const parentIdTreeElRef = ref<ParentIdTreeElRefType>(null)
  const refColumns = ref<CrudColumn[]>([
    {
      label: '名称',
      prop: 'name',
      component: 'el-autocomplete',
      add: true,
      edit: true,
      search: true,
      detail: true,
      span: 12,
      required: true,
      props: {
        fetchSuggestions(queryString: string, cb: any) {
          const resouceRoutes = router.getRoutes()
          let wrappedRoutes = resouceRoutes.map((route) => ({
            ...route,
            value: route.meta?.title,
          })) as (RouteRecordNormalized & { value: string })[]

          {
            // 父级选中筛选
            let parentNodeData: any = {}
            if (parentIdTreeElRef.value) {
              // 获取 Tree 实例
              const tree = (parentIdTreeElRef.value as any).treeRef
              // 获取 Node 包装对象
              const node = tree?.getNode(crudRefData.form.parentId)
              if (node && node.data) {
                // 2. 注意：这里要取 node.data 才是你的原始业务对象
                parentNodeData = node.data
              }
            }
            const parentRoute = wrappedRoutes.find(
              (routeItem) => parentNodeData.code === routeItem.name,
            )
            if (parentRoute) {
              const childrenNames = (parentRoute.children?.map((child) => child.name) ||
                []) as string[]
              wrappedRoutes = wrappedRoutes.filter((routeItem) =>
                childrenNames.includes(routeItem.name as string),
              )
            }
          }

          const createFilter = (query: string) => {
            return wrappedRoutes.filter((route) => {
              const title = route.meta?.title
              return title && (title + '').includes(query)
            })
          }
          const rsArr = queryString ? createFilter(queryString) : wrappedRoutes
          cb(rsArr)
        },
        onSelect(item: RouteRecordNormalized) {
          if (typeof item.name === 'string') {
            crudRefData.form.code = item.name
          }
        },
        onBlur() {
          if (!crudRefData.form.name) return
          const resouceRoutes = router.getRoutes()
          const targetRoute = resouceRoutes.find(
            (route) => route.meta?.title === crudRefData.form.name,
          )
          if (targetRoute && typeof targetRoute.name === 'string') {
            crudRefData.form.code = targetRoute.name
          }
        },
      },
      minWidth: 120,
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
      minWidth: 120,
      props: {
        onChange(val: string) {
          if (val && val.endsWith('-fo') && !crudRefData.form.genCrudPrefix) {
            crudRefData.form.genCrudPrefix = '/' + val.replace('-fo', '')
          }
        },
      },
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
          { value: 'directory', label: '目录' },
          { value: 'menu', label: '菜单' },
          { value: 'button', label: '按钮' },
        ],
      },
    },
    {
      label: '父级',
      prop: 'parentId',
      component: 'el-tree-select',
      props: {
        ref: (el) => (parentIdTreeElRef.value = el as ParentIdTreeElRefType),
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
      span: 8,
    },
    {
      label: '是否仅限管理员',
      prop: 'isAdmin',
      component: 'el-switch',
      add: true,
      edit: true,
      // search: true,
      detail: true,
      span: 8,
    },

    {
      label: 'crud-api前缀',
      prop: 'genCrudPrefix',
      component: 'el-input',
      add: true,
      detail: true,
      span: 8,
    },
    {
      label: 'crud连接符',
      prop: 'crudHyphen',
      component: 'el-select',
      add: true,
      detail: true,
      span: 8,
      props: {
        options: [
          {
            label: '-',
            value: '-',
          },
          {
            label: ':',
            value: ':',
          },
        ],
      },
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
            const arr = list.filter((item) => item.value.includes(queryString))
            arr.push({
              value: queryString,
            })
            cb(arr)
          }
        })(),
      },
    },
    {
      label: '菜单操作',
      prop: 'cus-opts',
      render: (row: ResourceVO) =>
        h(
          ElButton,
          {
            onClick: () => handles.handleAddChild(row),
            size: 'small',
          },
          {
            default: () => '添加子级',
          },
        ),
    },
  ])

  // 初始化调用每一个column?.props?.reqFunc函数
  refColumns.value.forEach((column) => {
    const reqFunc = column?.props?.reqFunc
    if (isFunction(reqFunc)) {
      reqFunc(column)
    }
  })

  const handles = {
    handleAddChild(row: any) {
      crudInstanceRef.value?.openDialog('add', row)
      Object.assign(crudRefData.form, {
        parentId: row.id,
        type: row.type === 'menu' ? 'button' : 'directory',
        code: `${row.code}:`,
      })
    },
  }

  // 修改表单的排序
  const formColumns = computed(() =>
    sortBySequence(
      refColumns.value.filter((item) => item.add),
      'prop',
      ['parentId', 'type'],
    ).filter((item) => {
      if (item.prop === 'routeNames' && crudRefData.form?.type !== 'button') {
        // 按钮类型才可配置api路径
        return false
      }
      if (
        ['genCrudPrefix', 'crudHyphen'].includes(item.prop) &&
        crudRefData.form?.type !== 'menu'
      ) {
        return false
      }
      return true
    }),
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
    submitText: '提交',
    resetText: '重置',
    detail: (_row) => true,
    edit: (_row) => true,
    del: (_row) => true,
    fixed: 'right',
    width: '180px',
  })

  const crudHandles = {
    beforeOpen: defineCrudBeforeOpen((done, type, row) => {
      const parentIdColumn = refColumns.value.find((item: CrudColumn) => item.prop === 'parentId')
      if (parentIdColumn && parentIdColumn.props) {
        parentIdColumn.props.data = crudRefData.tableData
      }
      crudRefData.form.crudHyphen = '-'
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
        const res = await reqFunc(crudRefData.form)
        if (type === 'add' && (crudRefData.form as any).genCrudPrefix) {
          await crudHandles._addCrudPermission(
            res.data as ResourceVO,
            (crudRefData.form as any).genCrudPrefix,
          )
        }

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
        await crudHandles.paginationChange(
          paginationRefData.currentPage,
          paginationRefData.pageSize,
        )
      } catch (e) {
        console.error(e)
      }
    },
    async paginationChange(_currentPage: number, _pageSize: number) {
      crudRefData.loading = true
      try {
        const res = await gApi.apiResourceListPost({
          // pageIndex: currentPage,
          // pageSize: pageSize,
          ...crudRefData.searchForm,
        })
        const arrData = markRaw(get(res, 'data', []) as ResourceVO[])
        paginationRefData.total = arrData.length

        arrData.forEach((item) => {
          if (item.routeNames?.length) {
            item.routeNames.forEach((route) => {
              if (!(route + '').startsWith('/')) {
                console.log(item, '路由api配置有误')
              }
            })
          }
        })

        const { treeData } = listToTree(arrData)
        crudRefData.tableData = treeData
      } catch (e) {
        console.log(e)
      } finally {
        crudRefData.loading = false
      }
    },
    searchReset() {
      paginationRefData.currentPage = 1
      crudHandles.paginationChange(paginationRefData.currentPage, paginationRefData.pageSize)
    },
    refreshTable() {
      crudHandles.paginationChange(paginationRefData.currentPage, paginationRefData.pageSize)
    },
    _addCrudPermission(parentData: ResourceVO, prefix: string) {
      const crudPerms = [
        {
          code: 'add',
          label: '添加',
        },
        {
          code: 'remove',
          label: '删除',
        },
        {
          code: 'edit',
          label: '编辑',
        },
        {
          code: 'query',
          label: '查看',
          api: 'paged-list,list',
        },
      ]
      const promises = crudPerms.map((perm) => {
        const payload = {
          routeNames: (perm.api ?? perm.code).split(',').map((api) => `${prefix}/${api}`),
          parentId: parentData.id,
          type: 'button',
          name: perm.label,
          code: `${parentData.code}${crudRefData.form.crudHyphen}${perm.code}`,
          isEnable: true,
          isAdmin: false,
        }
        return gApi.apiResourceAddPost(payload as any)
      })
      return Promise.allSettled(promises)
    },
  }

  crudHandles.paginationChange(paginationRefData.currentPage, paginationRefData.pageSize)

  // 配置文档请看 https://tolking.github.io/element-pro-components/zh-CN/components/crud

  const crudProps = computed<Partial<ICrudProps>>(() => ({
    columns: refColumns.value,
    searchColumns: refSearchColumns.value,
    addColumns: formColumns.value,
    editColumns: formColumns.value,
    menu: refMenu.value,
    data: crudRefData.tableData,
    detail: crudRefData.detail,
    beforeOpen: crudHandles.beforeOpen,
    searchProps: crudStaticData.searchProps,
    onSearch: crudHandles.search,
    onSubmit: crudHandles.submit,
    onDelete: crudHandles.deleteRow,
    onSearchReset: crudHandles.searchReset,
    // total: paginationRefData.total,
    onLoad: () =>
      crudHandles.paginationChange(paginationRefData.currentPage, paginationRefData.pageSize),
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
    crudRefData,
    crudStaticData,
    crudHandles,
    crudProps,
    paginationRefData,
    searchMenuRightProps,
    crudInstanceRef,
  }
}

export { createCrudData }
