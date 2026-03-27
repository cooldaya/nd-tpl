import { reactive, markRaw, computed } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import {
  defineCrudColumns,
  defineCrudSubmit,
  defineCrudSearch,
  defineCrudBeforeOpen,
  defineCrudMenuColumns,
} from 'element-pro-components'
import type { ICrudMenuColumns, ICrudProps, CrudColumn } from 'element-pro-components'
import type { ProCrud } from 'element-pro-components'
import type { MaybeRef } from 'vue'
import { ref } from 'vue'
import { get } from 'lodash-es'
import { gApi } from '@/api/gapi'
import type {
  OrganizationVO,
  OrganizationFO,
  FurionResultOrganization,
  FurionResultOrganizationVO,
} from '@/api/generated/data-contracts'
import { listToTree } from '@/utils/funcs-tool'

const createCurdData = (_crudElRef?: MaybeRef<InstanceType<typeof ProCrud> | null>) => {
  const curdRefData = reactive({
    form: {},
    searchForm: {},
    detail: {},
    tableData: [] as OrganizationVO[],
    searchProps: {
      gutter: 20,
    },
  })

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
      component: 'pro-radio',
      add: true,
      detail: true,
      span: 12,
      props: {
        options: [
          { label: '是', value: 1 },
          { label: '否', value: 0 },
        ],
      },
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
  ])

  const refSearchColumns = computed(() => {
    return refColumns.value
      .filter((item: CrudColumn) => item.search)
      .map((item) => ({
        ...item,
        required: false,
      }))
  })

  const refMenu = ref<ICrudMenuColumns>({
    label: '操作',
    addText: '新增',
    detailText: '详情',
    editText: '编辑',
    delText: '删除',
    searchText: '搜索',
    searchResetText: '重置',
    submitText: '添加',
    resetText: '重置',
    detail: (row) => true,
    edit: (row) => true,
    del: (row) => true,
  })

  const paginationRefData = reactive({
    total: 0,
    pageSize: 10,
    currentPage: 1,
  })

  const curdHandles = {
    beforeOpen: defineCrudBeforeOpen((done, type, row) => {
      // 在打开弹窗（新增或编辑）时，预填充下拉框树形数据
      const parentIdColumn = refColumns.value.find((item: CrudColumn) => item.prop === 'parentId')
      if (parentIdColumn && parentIdColumn.props) {
        parentIdColumn.props.data = curdRefData.tableData
      }

      if (type === 'edit') {
        curdRefData.form = row || {}
      } else if (type === 'detail') {
        curdRefData.detail = row || {}
      } else if (type === 'add') {
        curdRefData.form = {
          isEnable: 1,
        }
      }
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
        (data: OrganizationFO) => Promise<FurionResultOrganizationVO | FurionResultOrganization>
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
        const _res = await reqFunc(curdRefData.form)
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
        await curdHandles.paginationChange(
          paginationRefData.currentPage,
          paginationRefData.pageSize,
        )
      } catch (e) {
        console.error(e)
      }
    },
    async paginationChange(currentPage: number, pageSize: number) {
      const res = await gApi.apiOrganizationPagedListPost({
        pageIndex: currentPage,
        pageSize: pageSize,
        ...curdRefData.searchForm,
      })

      paginationRefData.total = get(res, 'data.total', 0)
      const arrData = markRaw(get(res, 'data.items', []) as OrganizationVO[])
      const treeData = listToTree(arrData)
      curdRefData.tableData = treeData
    },
  }

  curdHandles.paginationChange(paginationRefData.currentPage, paginationRefData.pageSize)

  // 配置文档请看 https://tolking.github.io/element-pro-components/zh-CN/components/crud

  const crudProps = computed<Partial<ICrudProps>>(() => ({
    columns: refColumns.value,
    menu: refMenu.value,
    searchColumns: refSearchColumns.value,
    data: curdRefData.tableData,
    detail: curdRefData.detail,
    beforeOpen: curdHandles.beforeOpen,
    searchProps: curdRefData.searchProps,
    onSearch: curdHandles.search,
    onSubmit: curdHandles.submit,
    onDelete: curdHandles.deleteRow,
    onSearchReset: () => {
      curdHandles.paginationChange(paginationRefData.currentPage, paginationRefData.pageSize)
    },
    total: paginationRefData.total,
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
  }))

  return {
    curdRefData,
    curdHandles,
    crudProps,
    paginationRefData,
  }
}

export { createCurdData }
