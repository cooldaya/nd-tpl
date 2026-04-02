import { reactive, markRaw, computed, ref, useTemplateRef, nextTick } from 'vue'
import type { ComponentPublicInstance } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { defineCrudSubmit, defineCrudSearch, defineCrudBeforeOpen } from 'element-pro-components'

import type {
  CrudColumn,
  ICrudProps,
  ICrudMenuColumns,
  IFormProps,
  ProCrud,
} from 'element-pro-components'
import { get } from 'lodash-es'
import { gApi } from '@/api/gapi'
import type {
  RoleVO,
  RoleFO,
  ApiRoleAddPostData,
  ApiRoleEditPostData,
  RoleAssignResourcesQO,
  TreeNode,
} from '@/api/generated/data-contracts'
import EpSearch from '~icons/ep/search'
import EpRefreshLeft from '~icons/ep/refresh-left'
import { exportProTable, sortBySequence } from '@/utils/funcs-tool'

type CrudOption = {
  exportFileName?: string
  defaultForm?: Partial<RoleFO>
}
const createCrudData = (crudOption: CrudOption | undefined = {}) => {
  const crudInstanceRef = useTemplateRef<ComponentPublicInstance<typeof ProCrud>>('crudInstanceRef')
  const crudRefData = reactive({
    form: {},
    searchForm: {},
    detail: {},
    tableData: [] as RoleVO[],
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
      const res = await gApi.apiRolePagedListPost({
        pageIndex: 1,
        pageSize: 99,
        ...crudRefData.searchForm,
      })
      const arrData = get(res, 'data.items', [])
      const fileName = crudOption.exportFileName || '角色管理'
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
      label: '名称',
      prop: 'name',
      component: 'el-input',
      add: true,
      edit: true,
      search: true,
      detail: true,
      required: true,
    },
    {
      label: '备注',
      prop: 'remark',
      component: 'el-input',
      add: true,
      edit: true,
      detail: true,
      props: {
        type: 'textarea',
      },
    },
    {
      label: '权限操作',
      prop: 'cus-opts',
      width: '140',
    },
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
      .filter((item: CrudColumn, _idx) => item.search)
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
        (data: RoleFO) => Promise<ApiRoleAddPostData | ApiRoleEditPostData>
      > = {
        add: gApi.apiRoleAddPost,
        edit: gApi.apiRoleEditPost,
      }
      const reqFunc = reqFuncMap[type]

      if (!reqFunc) {
        ElMessage.error('操作类型错误')
        return
      }
      try {
        await reqFunc(crudRefData.form as RoleFO)
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

    async deleteRow(row: RoleVO) {
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
        await gApi.apiRoleRemovePost({
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
      const res = await gApi.apiRolePagedListPost({
        pageIndex: currentPage,
        pageSize: pageSize,
        ...crudRefData.searchForm,
      })
      paginationRefData.total = get(res, 'data.total', 0)
      crudRefData.tableData = markRaw(get(res, 'data.items', []) as RoleVO[])
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
    crudInstanceRef,
  }
}

const createAssignPermissions = () => {
  type ApRefDataType = {
    currentRow: RoleFO | null
    visible: boolean
    form: RoleAssignResourcesQO
  }
  const apRefData = reactive<ApRefDataType>({
    currentRow: null,
    visible: false,
    form: {
      resourceIds: [],
      roleId: 0,
    },
  })

  const treeData = ref<TreeNode[]>()
  gApi
    .apiResourceTreedataPost({
      isEnable: true,
    })
    .then((res) => {
      if (res?.data) {
        treeData.value = res.data
      }
    })

  const formElTreeRef = ref()
  const proFormProps = computed<Partial<IFormProps>>(() => ({
    columns: [
      {
        label: '菜单权限',
        prop: 'resourceIds',
        component: 'el-tree',
        props: {
          ref: formElTreeRef,
          data: treeData.value,
          showCheckbox: true,
          props: {
            label: 'name',
            children: 'children',
          },
          nodeKey: 'id',
        },
      },
    ],
    menu: {
      submitText: '提交',
      reset: false,
    },
  }))

  const apHandles = {
    async open(row: RoleFO) {
      apRefData.currentRow = markRaw(row)
      apRefData.form.roleId = row.id!
      const res = await gApi.apiResourceGetResourcesPost({
        id: row.id,
      })
      apRefData.form.resourceIds = res.data!
      apRefData.visible = true
      nextTick(() => {
        if (!formElTreeRef.value) return
        formElTreeRef.value.setCheckedKeys(apRefData.form.resourceIds)
      })
    },
    close() {
      apRefData.visible = false
    },
    async submit(done: () => void, _isValid: boolean) {
      if (!formElTreeRef.value) throw new Error('formElTreeRef is null')
      apRefData.form.resourceIds = formElTreeRef.value.getCheckedKeys()
      await gApi.apiRoleAssignResourcePost(apRefData.form)
      done()
      apHandles.close()
    },
  }

  const dialogTitle = computed(() => {
    const roleName = apRefData.currentRow?.name ?? ''
    return `权限分配-${roleName}`
  })

  return {
    apRefData,
    apHandles,
    dialogTitle,
    proFormProps,
  }
}

export { createCrudData, createAssignPermissions }
