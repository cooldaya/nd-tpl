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
  UserMessageVO,
  UserMessageFO,
  FurionResultUserMessage,
  FurionResultUserMessageVO,
} from '@/api/generated/data-contracts'

const createCurdData = () => {
  const curdRefData = reactive({
    form: {},
    searchForm: {},
    detail: {},
    tableData: [] as UserMessageVO[],
  })

  const paginationRefData = reactive({
    total: 0,
    pageSize: 10,
    current: 1,
  })

  const curdStaticData = {
    columns: defineCrudColumns([
      {
        label: '是否已读',
        prop: 'isRead',
        component: 'el-input',
        add: true,
        edit: true,
        search: true,
        detail: true,
      },
      {
        label: '是否已删除',
        prop: 'isDelete',
        component: 'el-input',
        add: true,
        edit: true,
        search: true,
        detail: true,
      },
      {
        label: '读取时间',
        prop: 'readTime',
        component: 'el-input',
        add: true,
        edit: true,
        search: true,
        detail: true,
      },
      {
        label: '删除时间',
        prop: 'deleteTime',
        component: 'el-input',
        add: true,
        edit: true,
        search: true,
        detail: true,
      },
      {
        label: '标题',
        prop: 'title',
        component: 'el-input',
        add: true,
        edit: true,
        search: true,
        detail: true,
      },
      {
        label: '内容',
        prop: 'content',
        component: 'el-input',
        add: true,
        edit: true,
        search: true,
        detail: true,
      },
      {
        label: '类型',
        prop: 'type',
        component: 'el-input',
        add: true,
        edit: true,
        search: true,
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
          data: UserMessageFO,
        ) => Promise<FurionResultUserMessageVO | FurionResultUserMessage>
      > = {
        add: gApi.apiUserMessageAddPost,
        edit: gApi.apiUserMessageEditPost,
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

    async deleteRow(row: UserMessageVO) {
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
        const res = await gApi.apiUserMessageRemovePost({
          id: row.id,
        })
        ElMessage.success('删除成功')
        await curdHandles.paginationChange(paginationRefData.current, paginationRefData.pageSize)
      } catch (e) {
        console.error(e)
      }
    },
    async paginationChange(currentPage: number, pageSize: number) {
      const res = await gApi.apiUserMessagePagedListPost({
        pageIndex: currentPage,
        pageSize: pageSize,
        ...curdRefData.searchForm,
      })
      paginationRefData.total = get(res, 'data.total', 0)
      curdRefData.tableData = markRaw(get(res, 'data.items', []) as UserMessageVO[])
    },
  }

  const curdProps = computed<Partial<ICrudProps>>(() => ({
    columns: curdStaticData.columns,
    menu: curdStaticData.menu,
    data: curdRefData.tableData,
    detail: curdRefData.detail,
    beforeOpen: curdHandles.beforeOpen,
    searchProps: curdStaticData.searchProps,
    onSearch: curdHandles.search,
    onSubmit: curdHandles.submit,
    onDelete: curdHandles.deleteRow,
  }))

  curdHandles.paginationChange(paginationRefData.current, paginationRefData.pageSize)

  return {
    curdRefData,
    curdStaticData,
    curdHandles,
    curdProps,
    paginationRefData,
  }
}

export { createCurdData }
