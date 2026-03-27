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
  ReservoirProjectVO,
  ReservoirProjectFO,
  FurionResultReservoirProject,
  FurionResultReservoirProjectVO,
} from '@/api/generated/data-contracts'

const createCurdData1 = () => {
  const curdRefData = reactive({
    form: {},
    searchForm: {},
    detail: {},
    tableData: [] as ReservoirProjectVO[],
  })

  const paginationRefData = reactive({
    total: 50,
    pageSize: 10,
    current: 1,
  })

  const curdStaticData = {
    columns: defineCrudColumns([
      {
        label: '水电站名称',
        prop: 'technicsName',
        component: 'el-input',
        add: true,
        edit: true,
        search: true,
        detail: true,
      },
      {
        label: '编码',
        prop: 'stationCode',
        component: 'el-input',
        add: true,
        search: false,
        detail: true,
      },
      {
        label: '建设地点',
        prop: 'constructionSite',
        component: 'el-input',
        add: true,
        search: true,
        edit: true,
        detail: true,
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
      detail: (row) => row.date !== '2016-05-02',
      edit: (row) => row.date !== '2016-05-03',
      del: (row) => row.date !== '2016-05-04',
      // searchReset: false,
      // detailProps: { type: 'success', plain: true },
      // editProps: { type: 'default', plain: true },
      // delProps: { type: 'info', plain: true },
    }),
    searchProps: {
      gutter: 20,
      // inline: true,
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
      console.log('search')
      try {
        await curdHandles.paginationChange(paginationRefData.current, paginationRefData.pageSize)
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
          data: ReservoirProjectFO,
        ) => Promise<FurionResultReservoirProjectVO | FurionResultReservoirProject>
      > = {
        add: gApi.apiReservoirProjectAddPost,
        edit: gApi.apiReservoirProjectEditPost,
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
        await curdHandles.paginationChange(paginationRefData.current, paginationRefData.pageSize)
      } catch (e) {
        console.error(e)
      } finally {
        done()
      }
    }),

    async deleteRow(row: ReservoirProjectVO) {
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
        const res = await gApi.apiReservoirProjectRemovePost({
          id: row.id,
        })
        ElMessage.success('删除成功')
        await curdHandles.paginationChange(paginationRefData.current, paginationRefData.pageSize)
      } catch (e) {
        console.error(e)
      }
    },
    async paginationChange(currentPage: number, pageSize: number) {
      const res = await gApi.apiReservoirProjectPagedListPost({
        pageIndex: currentPage,
        pageSize: pageSize,
        ...curdRefData.searchForm,
      })
      paginationRefData.total = get(res, 'data.total', 0)
      curdRefData.tableData = markRaw(get(res, 'data.items', []) as ReservoirProjectVO[])
    },
  }

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
    vModel: curdRefData.form,
    search: curdRefData.searchForm,
    currentPage: paginationRefData.current,
    pageSize: paginationRefData.pageSize,
    total: paginationRefData.total,
    height: 460,
    layout: '->, prev, pager, next, sizes, total',
    showOverflowTooltip: true,
    stripe: true,
    background: true,
    inline: true,
  }))

  curdHandles.paginationChange(paginationRefData.current, paginationRefData.pageSize)

  return {
    curdRefData,
    curdStaticData,
    curdHandles,
    crudProps,
    paginationRefData,
  }
}

export { createCurdData1 }
