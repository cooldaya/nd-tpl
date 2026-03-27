import { reactive, markRaw, computed } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import {
  defineCrudColumns,
  defineCrudSubmit,
  defineCrudSearch,
  defineCrudBeforeOpen,
  defineCrudMenuColumns,
  type ICrudProps,
} from 'element-pro-components'
import { get } from 'lodash-es'
import { gApi } from '@/api/gapi'
import type {
  OrganizationVO,
  OrganizationFO,
  FurionResultOrganization,
  FurionResultOrganizationVO,
} from '@/api/generated/data-contracts'

const createCurdData = () => {
  const curdRefData = reactive({
    form: {},
    searchForm: {},
    detail: {},
    tableData: [] as OrganizationVO[],
  })

  const paginationRefData = reactive({
    total: 0,
    pageSize: 10,
    currentPage: 1,
  })

  const curdStaticData = {
    columns: defineCrudColumns([
      {
        label: '编号',
        prop: 'code',
        component: 'el-input',
        add: true,
        edit: true,
        search: true,
        detail: true,
        span: 12,
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
      },
      {
        label: '联系人',
        prop: 'contactPerson',
        component: 'el-input',
        add: true,
        edit: true,
        search: true,
        detail: true,
        span: 12,
      },
      {
        label: '联系人联系方式',
        prop: 'contactWay',
        component: 'el-input',
        add: true,
        edit: true,
        search: true,
        detail: true,
        span: 12,
      },
      {
        label: '是否在地图中显示',
        prop: 'isDisplayInmap',
        component: 'el-input',
        add: true,
        edit: true,
        search: true,
        detail: true,
        span: 12,
      },
      {
        label: '经度',
        prop: 'longitude',
        component: 'el-input',
        add: true,
        edit: true,
        search: true,
        detail: true,
        span: 12,
      },
      {
        label: '纬度',
        prop: 'latitude',
        component: 'el-input',
        add: true,
        edit: true,
        search: true,
        detail: true,
        span: 12,
      },
      {
        label: '地址',
        prop: 'address',
        component: 'el-input',
        add: true,
        edit: true,
        search: true,
        detail: true,
        span: 12,
      },
      {
        label: '是否包含视频',
        prop: 'isVideo',
        component: 'el-input',
        add: true,
        edit: true,
        search: true,
        detail: true,
        span: 12,
      },
      {
        label: '是否启用',
        prop: 'isEnable',
        component: 'el-input',
        add: true,
        edit: true,
        search: true,
        detail: true,
        span: 12,
      },
      {
        label: '级别',
        prop: 'level',
        component: 'el-input',
        add: true,
        edit: true,
        search: true,
        detail: true,
        span: 12,
      },
      {
        label: '路径key',
        prop: 'pathkey',
        component: 'el-input',
        add: true,
        edit: true,
        search: true,
        detail: true,
        span: 12,
      },
      {
        label: '路径',
        prop: 'nestedpath',
        component: 'el-input',
        add: true,
        edit: true,
        search: true,
        detail: true,
        span: 12,
      },
      {
        label: '备注',
        prop: 'remark',
        component: 'el-input',
        add: true,
        edit: true,
        search: true,
        detail: true,
        span: 12,
      },
      {
        label: '上级组织机构',
        prop: 'parentName',
        component: 'el-input',
        add: true,
        edit: true,
        search: true,
        detail: true,
        span: 12,
      },
    ]),
    menu: defineCrudMenuColumns({
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
    }),
    searchProps: {
      gutter: 20,
    },
  }

  const curdHandles = {
    beforeOpen: defineCrudBeforeOpen((done, type, row) => {
      if (type === 'edit') {
        curdRefData.form = row || {}
      } else if (type === 'detail') {
        curdRefData.detail = row || {}
      }
      done()
    }),

    search: defineCrudSearch(async (done, isValid, invalidFields) => {
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

    submit: defineCrudSubmit(async (close, done, type, isValid, invalidFields) => {
      const reqFuncMap: Record<
        string,
        (
          data: OrganizationFO,
        ) => Promise<FurionResultOrganizationVO | FurionResultOrganization>
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
        const res = await reqFunc(curdRefData.form)
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
        return ElMessage.info('已取消删除')
      }
      try {
        const res = await gApi.apiOrganizationRemovePost({
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
      curdRefData.tableData = markRaw(get(res, 'data.items', []) as OrganizationVO[])
    },
  }

  curdHandles.paginationChange(paginationRefData.currentPage, paginationRefData.pageSize)

  // 配置文档请看 https://tolking.github.io/element-pro-components/zh-CN/components/crud

  const crudProps = computed<Partial<ICrudProps>>(() => ({
    columns: curdStaticData.columns,
    menu: curdStaticData.menu,
    data: curdRefData.tableData,
    detail: curdRefData.detail,
    beforeOpen: curdHandles.beforeOpen,
    searchProps: curdStaticData.searchProps,
    onSearch: curdHandles.search,
    onSubmit: curdHandles.submit,
    onDelete: curdHandles.deleteRow,
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
  }
}

export { createCurdData }
