import { reactive, markRaw, computed, ref, useTemplateRef, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { get, isFunction } from 'lodash-es'
import { gApi } from '@/api/gapi'
import { defineCrudSubmit, defineCrudSearch, defineCrudBeforeOpen } from 'element-pro-components'
import EpSearch from '~icons/ep/search'
import EpRefreshLeft from '~icons/ep/refresh-left'
import { exportProTable, sortBySequence } from '@/utils/funcs-tool'
import { validator } from '@/utils/validate'
import { remotePkRsaEncrypt } from '@/api/app-api/auth'

import type { ComponentPublicInstance } from 'vue'
import type { CrudColumn, ICrudProps, ICrudMenuColumns, ProCrud } from 'element-pro-components'
import type {
  UserVO,
  ApiUserAddPostData,
  ApiUserEditPostData,
} from '@/api/generated/data-contracts'

type CurdOption = {
  exportFileName?: string
  defaultForm?: Partial<UserVO>
}
const createCurdData = (curdOption: CurdOption | undefined = {}) => {
  const crudInstanceRef = useTemplateRef<ComponentPublicInstance<typeof ProCrud>>('crudInstanceRef')
  const curdRefData = reactive({
    form: {} as UserVO,
    searchForm: {},
    detail: {},
    tableData: [] as UserVO[],
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
      const res = await gApi.apiUserPagedListPost({
        pageIndex: 1,
        pageSize: 99,
        ...curdRefData.searchForm,
      })
      const arrData = get(res, 'data.items', [])
      const fileName = curdOption.exportFileName || '用户管理'
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
      label: '编号',
      prop: 'code',
      component: 'el-input',
      add: true,
      edit: true,
      search: true,
      detail: true,
      span: 8,
      required: true,
    },
    {
      label: '登录名',
      prop: 'loginname',
      component: 'el-input',
      add: true,
      edit: true,
      search: true,
      detail: true,
      span: 8,
      required: true,
    },
    {
      label: '姓名',
      prop: 'name',
      component: 'el-input',
      add: true,
      edit: true,
      search: true,
      detail: true,
      span: 8,
      required: true,
    },
    {
      label: '密码',
      prop: 'password',
      component: 'el-input',
      add: true,
      edit: false,
      span: 8,
      required: true,
    },
    {
      label: '确认密码',
      prop: 'confirmPassword',
      component: 'el-input',
      span: 8,
      add: true,
      edit: false,
      required: true,
      rules: [
        {
          validator: (rule, value, callback) => {
            if (value !== curdRefData.form.password) {
              callback(new Error('两次输入的密码不一致'))
            } else {
              callback()
            }
          },
        },
      ],
    },
    {
      label: '邮箱',
      prop: 'email',
      component: 'el-input',
      add: true,
      edit: true,
      detail: true,
      span: 8,
      rules: [
        {
          validator: (rule, value, callback) => {
            if (!value) return callback()
            if (!validator.isEmail(value)) {
              callback(new Error('请输入正确的邮箱地址'))
            } else {
              callback()
            }
          },
        },
      ],
    },
    {
      label: '身份证号码',
      prop: 'idcode',
      component: 'el-input',
      add: true,
      edit: true,
      detail: true,
      span: 8,
      rules: [
        {
          validator: (rule, value, callback) => {
            if (!value) return callback()
            if (!validator.isIdCard(value)) {
              callback(new Error('身份证号码格式不正确'))
            } else {
              callback()
            }
          },
        },
      ],
    },
    {
      label: '性别',
      prop: 'sex',
      component: 'pro-radio',
      add: true,
      edit: true,
      span: 8,
      props: {
        data: [],
      },
    },
    {
      label: '民族',
      prop: 'nation',
      component: 'el-input',
      add: true,
      edit: true,
      detail: true,
      span: 8,
    },
    {
      label: '出生日期',
      prop: 'birthday',
      component: 'el-date-picker',
      add: true,
      edit: true,
      detail: true,
      span: 8,
      props: {
        valueFormat: 'yyyy-MM-dd',
      },
    },
    {
      label: '手机号',
      prop: 'mobile',
      component: 'el-input',
      add: true,
      edit: true,
      detail: true,
      span: 8,
      rules: [
        {
          validator: (rule, value, callback) => {
            if (!value) return callback()
            if (!validator.isPhone(value)) {
              callback(new Error('手机号格式不正确'))
            } else {
              callback()
            }
          },
        },
      ],
    },
    {
      label: '微信openid',
      prop: 'wxopenid',
      component: 'el-input',
      add: true,
      edit: true,
      detail: true,
      span: 8,
    },
    {
      label: '微信unionid',
      prop: 'wxunionid',
      component: 'el-input',
      add: true,
      edit: true,
      detail: true,
      span: 8,
    },
    {
      label: 'maxNos',
      prop: 'maxNos',
      component: 'el-input',
      add: true,
      edit: true,
      detail: true,
      span: 8,
    },
    {
      label: 'ssoid',
      prop: 'ssoId',
      component: 'el-input',
      add: true,
      edit: true,
      detail: true,
      span: 8,
    },
    // {
    //   label: 'typeCode',
    //   prop: 'typeCode',
    //   component: 'el-input',
    //   add: true,
    //   edit: true,
    //   search: true,
    //   detail: true,
    //   span: 8,
    // },
    {
      label: '从属组织',
      prop: 'organizationId',
      component: 'el-cascader',
      add: true,
      edit: true,
      search: true,
      // detail: true,
      span: 8,
      required: true,
      props: {
        options: [],
        class: 'w-full',
        props: {
          label: 'name',
          value: 'id',
          emitPath: false,
        },
        async reqFunc(column: CrudColumn) {
          if (!column || !column.props || (column.props.options as []).length) {
            // 只请求一次数据
            return
          }
          const res = await gApi.apiOrganizationTreedataPost({})
          column.props!.options = res.data
        },
      },
    },
    {
      label: '是否启用',
      prop: 'isEnable',
      component: 'el-switch',
      add: true,
      edit: true,
      search: true,
      detail: true,
      span: 8,
    },

    {
      label: '是否可以登录',
      prop: 'canLogin',
      component: 'el-switch',
      add: true,
      edit: true,
      search: true,
      detail: true,
      span: 8,
    },
    {
      label: '上次登录时间',
      prop: 'lastLoginTime',
      component: 'el-input',
      // add: true,
      // edit: true,
      // search: true,
      detail: true,
      span: 8,
    },
    {
      label: '组织机构名称',
      prop: 'organizationName',
      component: 'el-input',
      // add: true,
      // edit: true,
      // search: true,
      detail: true,
      span: 8,
    },
    {
      label: '地址',
      prop: 'address',
      component: 'el-input',
      add: true,
      edit: true,
      detail: true,
      // span: 12,
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
      fixed: 'right',
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
        (data: UserVO) => Promise<ApiUserAddPostData | ApiUserEditPostData>
      > = {
        add: gApi.apiUserAddPost as (data: UserVO) => Promise<ApiUserAddPostData>,
        edit: gApi.apiUserEditPost as (data: UserVO) => Promise<ApiUserAddPostData>,
      }
      const reqFunc = reqFuncMap[type]

      if (!reqFunc) {
        ElMessage.error('操作类型错误')
        return
      }
      try {
        const payload = { ...curdRefData.form }
        if (type === 'add') {
          const encryptedpwd = await remotePkRsaEncrypt(payload.password!)
          Object.assign(payload, {
            password: encryptedpwd,
            confirmPassword: encryptedpwd,
          })
        }
        await reqFunc(payload as UserVO)
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

    async deleteRow(row: UserVO) {
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
        await gApi.apiUserRemovePost({
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
      const res = await gApi.apiUserPagedListPost({
        pageIndex: currentPage,
        pageSize: pageSize,
        ...curdRefData.searchForm,
      })
      paginationRefData.total = get(res, 'data.total', 0)
      curdRefData.tableData = markRaw(get(res, 'data.items', []) as UserVO[])
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
    crudInstanceRef,
  }
}

export { createCurdData }
