import { ref, reactive, markRaw } from 'vue'
import { ElMessage } from 'element-plus'
import {
  defineCrudColumns,
  defineCrudSubmit,
  defineCrudSearch,
  defineCrudBeforeOpen,
  defineCrudMenuColumns,
} from 'element-pro-components'
import { get } from 'lodash-es'
import { gApi } from '@/api/gapi'
import type { ReservoirProjectVO } from '@/api/generated/data-contracts'

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
        search: true,
        detail: true,
      },
      {
        label: '建设地点',
        prop: 'constructionSite',
        component: 'el-input',
        add: true,
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

    search: defineCrudSearch((done, isValid, invalidFields) => {
      ElMessage(`search: ${isValid}`)
      console.log('search', curdRefData.searchForm, isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    }),

    submit: defineCrudSubmit((close, done, type, isValid, invalidFields) => {
      ElMessage(`submit: ${type}, ${isValid}`)
      console.log('submit', curdRefData.form, type, isValid, invalidFields)
      setTimeout(() => {
        isValid ? close() : done()
      }, 1000)
    }),

    deleteRow(row: object) {
      ElMessage('deleteRow')
      console.log('deleteRow', row)
    },
    async paginationChange(currentPage: number, pageSize: number) {
      const res = await gApi.apiReservoirProjectPagedListPost({
        pageIndex: currentPage,
        pageSize: pageSize,
      })
      paginationRefData.total = get(res, 'data.total', 0)
      curdRefData.tableData = markRaw(get(res, 'data.items', []) as ReservoirProjectVO[])
    },
  }

  curdHandles.paginationChange(paginationRefData.current, paginationRefData.pageSize)

  return {
    curdRefData,
    curdStaticData,
    curdHandles,
    paginationRefData,
  }
}

export { createCurdData1 }
