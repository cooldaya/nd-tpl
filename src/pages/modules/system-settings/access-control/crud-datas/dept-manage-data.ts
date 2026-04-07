import { reactive, markRaw, computed, ref, useTemplateRef, h } from 'vue'
import type { ComponentPublicInstance } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { defineCrudSubmit, defineCrudSearch, defineCrudBeforeOpen } from 'element-pro-components'

import type { CrudColumn, ICrudProps, ICrudMenuColumns } from 'element-pro-components'
import type { ProCrud } from 'element-pro-components'
import { get } from 'lodash-es'
import { gApi } from '@/api/gapi'
import type {
  OrganizationVO,
  OrganizationForm,
  FurionResultOrganizationVO,
} from '@/api/generated/data-contracts'
import EpSearch from '~icons/ep/search'
import EpRefreshLeft from '~icons/ep/refresh-left'
import { exportProTable, listToTree } from '@/utils/funcs-tool'
import { ElButton } from 'element-plus'
type CrudOption = {
  exportFileName?: string
  defaultForm?: Partial<OrganizationForm>
}
const createCrudData = (crudOption: CrudOption | undefined = {}) => {
  const crudInstanceRef = useTemplateRef<ComponentPublicInstance<typeof ProCrud>>('crudInstanceRef')
  const crudRefData = reactive({
    form: {},
    searchForm: {},
    detail: {},
    tableData: [] as OrganizationVO[],
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
      const res = await gApi.apiOrganizationPagedListPost({
        pageIndex: 1,
        pageSize: 99,
        ...crudRefData.searchForm,
      })
      const arrData = get(res, 'data.items', [])
      const fileName = crudOption.exportFileName || '部门管理'
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
      label: '编号',
      prop: 'code',
      component: 'el-input',
      add: true,
      search: true,
      detail: true,
      span: 12,
      required: true,
    },
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
      label: '联系人',
      prop: 'contactPerson',
      component: 'el-input',
      add: true,
      edit: true,
      detail: true,
      span: 12,
    },
    {
      label: '联系人联系方式',
      prop: 'contactWay',
      component: 'el-input',
      detail: true,
      span: 12,
    },
    {
      label: '是否在地图中显示',
      prop: 'isDisplayInmap',
      component: 'el-input',
      add: true,
      edit: true,
      detail: true,
      span: 12,
      hide: true,
    },
    {
      label: '地址',
      prop: 'address',
      component: 'el-input',
      add: true,
      edit: true,
      detail: true,
      span: 12,
    },
    {
      label: '是否包含视频',
      prop: 'isVideo',
      component: 'el-input',
      add: true,
      span: 12,
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
    // {
    //   label: '级别',
    //   prop: 'level',
    //   component: 'el-input',
    //   add: true,
    //   detail: true,
    //   span: 12,
    // },
    {
      label: '路径key',
      prop: 'pathkey',
      component: 'el-input',
      add: true,
      detail: true,
      span: 12,
      hide: true,
    },
    {
      label: '路径',
      prop: 'nestedpath',
      component: 'el-input',
      detail: true,
      span: 12,
      hide: true,
    },
    {
      label: '备注',
      prop: 'remark',
      component: 'el-input',
      add: true,
      detail: true,
      span: 12,
    },
    {
      label: '上级组织机构',
      prop: 'parentName',
      component: 'el-input',
      detail: true,
      span: 12,
    },
    {
      label: '上级组织机构',
      prop: 'parentId',
      component: 'el-tree-select',
      add: true,
      edit: true,
      span: 12,
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
    },
    {
      label: '部门操作',
      prop: 'cus-opts',
      render: (row: OrganizationVO) =>
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

  const handles = {
    handleAddChild(row: any) {
      crudInstanceRef.value?.openDialog('add', row)
      Object.assign(crudRefData.form, {
        parentId: row.id,
      })
    },
  }

  const refSearchColumns = computed(() => {
    const arr = refColumns.value
      .filter(
        (item: CrudColumn, idx) =>
          item.search && (searchMenuRightProps.searchFormExpand ? true : idx < 3),
      )
      .map((item) => ({
        ...item,
        required: false,
      }))
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
      // 在打开弹窗（新增或编辑）时，预填充下拉框树形数据
      const parentIdColumn = refColumns.value.find((item: CrudColumn) => item.prop === 'parentId')
      if (parentIdColumn && parentIdColumn.props) {
        parentIdColumn.props.data = crudRefData.tableData
      }

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
        (data: OrganizationForm) => Promise<FurionResultOrganizationVO>
      > = {
        add: gApi.apiOrganizationAddPost,
        edit: gApi.apiOrganizationEditPost,
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

    async deleteRow(row: OrganizationVO) {
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
        await gApi.apiOrganizationRemovePost({
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
      const res = await gApi.apiOrganizationListPost({
        // pageIndex: currentPage,
        // pageSize: pageSize,
        ...crudRefData.searchForm,
      })

      const arrData = markRaw(get(res, 'data', []) as OrganizationVO[])
      paginationRefData.total = arrData.length
      const { treeData } = listToTree(arrData)
      crudRefData.tableData = treeData
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
    expand: true,
    highlightCurrentRow: true,
    tableLayout: 'auto',
  }))

  return {
    crudInstanceRef,
    crudRefData,
    crudStaticData,
    crudHandles,
    crudProps,
    paginationRefData,
    searchMenuRightProps,
  }
}

export { createCrudData }
