import { cloneDeep } from 'lodash-es'
import * as XLSX from 'xlsx'
import { orderBy, get } from 'lodash-es'

interface TreeConfig {
  parentIdKey?: string
  primaryKey?: string
  childrenKey?: string
}

/**
 * 将扁平数组转换为树形结构
 * 修复了 TS 索引类型报错问题
 */
export const listToTree = <T extends Record<string, any>>(
  list: T[],
  { parentIdKey = 'parentId', primaryKey = 'id', childrenKey = 'children' }: TreeConfig = {},
): T[] => {
  const data = cloneDeep(list)
  const nodeMap = new Map<string | number, T>()
  const tree: T[] = []

  for (const item of data) {
    // 通过类型断言解决“只能编制索引以供读取”的问题
    ;(item as any)[childrenKey] = []
    nodeMap.set(item[primaryKey], item)
  }

  for (const item of nodeMap.values()) {
    const parentId = item[parentIdKey]
    const parent = nodeMap.get(parentId)

    if (parent) {
      // 同样在这里使用断言
      ;(parent as any)[childrenKey].push(item)
    } else {
      tree.push(item)
    }
  }

  return tree
}

/**
 * 计算字符串在 Excel 中的视觉宽度
 */
const getSheetValueWidth = (value: any): number => {
  const str = value == null ? '' : String(value)
  let width = 0
  for (let i = 0; i < str.length; i++) {
    width += str.charCodeAt(i) > 255 ? 2 : 1.1
  }
  return width
}

/**
 * element-pro-components 导出工具函数 (优化版)
 */
export const exportProTable = (
  data: Record<string, any>[],
  searchForm: Record<string, any> = {},
  columns: any[],
  fileName: string = 'export-data',
) => {
  // 1. 过滤掉不需要导出的列
  const validColumns = columns.filter(
    (col) =>
      col.prop &&
      col.label &&
      !['selection', 'index', 'expand'].includes(col.type) &&
      col.hide !== true,
  )

  // 2. 处理“导出日期”和“检索条件” (固定展示在顶部)
  const searchRows: any[][] = []

  // 第一行：导出日期 (始终显示)
  searchRows.push([`导出日期: ${new Date().toLocaleString()}`])

  // 第二行：检索条件逻辑处理
  const activeFilters = Object.entries(searchForm || {})
    .filter(
      ([_, val]) =>
        val !== '' &&
        val !== undefined &&
        val !== null &&
        !(Array.isArray(val) && val.length === 0),
    )
    .map(([key, val]) => {
      const col = columns.find((c) => c.prop === key)
      const label = col ? col.label : key
      const displayVal = Array.isArray(val) ? val.join(' 至 ') : val
      return `${label}: ${displayVal}`
    })

  if (activeFilters.length > 0) {
    searchRows.push([`检索条件: ${activeFilters.join(' | ')}`])
  } else {
    searchRows.push([`检索条件: 无`]) // 没有条件时显示无
  }

  // 第三行：空行，美观隔离
  searchRows.push([])

  // 3. 处理表头和数据内容，并计算列宽
  const header = validColumns.map((col) => col.label)
  const colWidths = validColumns.map((col) => getSheetValueWidth(col.label))

  const body = data.map((row, rowIndex) => {
    return validColumns.map((col, colIndex) => {
      let cellValue = row[col.prop]

      // 处理 element-pro-components 的 formatter
      if (typeof col.formatter === 'function') {
        try {
          const res = col.formatter(row, col, cellValue, rowIndex)
          cellValue = typeof res === 'object' ? cellValue : res
        } catch (e) {
          /* ignore */
        }
      }

      if (typeof cellValue === 'boolean') cellValue = cellValue ? '是' : '否'
      const displayValue = cellValue ?? ''

      // 实时更新该列最大宽度
      const currentWidth = getSheetValueWidth(displayValue)
      if (currentWidth > colWidths[colIndex]) {
        colWidths[colIndex] = currentWidth
      }

      return displayValue
    })
  })

  // 4. 合并所有数据
  // 数据结构为: [ [日期], [条件], [], [表头], [数据行1], [数据行2] ]
  const sheetData = [...searchRows, header, ...body]

  // 5. 生成工作表
  const ws = XLSX.utils.aoa_to_sheet(sheetData)

  // 6. 应用优化后的列宽
  ws['!cols'] = colWidths.map((w) => ({
    wch: Math.min(Math.max(w + 2, 10), 50), // 最小10，最大50，外加2个字符边距
  }))

  // 7. 导出文件
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')
  XLSX.writeFile(wb, `${fileName}_${new Date().getTime()}.xlsx`)
}

/**
 * 逻辑：
 * 1. 有 order 值的项排在前面，按 order 值升序。
 * 2. 没有 order 值的项排在后面，且保留它们在原数组中的相对顺序。
 *
 * @param list - 需要排序的数组
 * @param sortKey - 排序字段名，支持点语法（如 'order' 或 'meta.rank'）
 * @returns 排序后的新数组
 */
export function sortByWeight<T>(list: T[], sortKey: string = 'order'): T[] {
  if (!Array.isArray(list) || list.length === 0) return []

  // 定义偏移量：安全整数的一半
  const OFFSET = Number.MAX_SAFE_INTEGER / 2

  /**
   * 使用“包装模式”处理排序：
   * 这样可以避免直接在对象 T 上添加临时属性导致的类型错误。
   */
  const wrappedList = list.map((item, index) => {
    // 获取排序值
    const orderValue = get(item, sortKey)

    // 判断是否有有效的排序值 (排除 null 和 undefined)
    const hasOrder = orderValue !== undefined && orderValue !== null

    let weight: number
    if (hasOrder) {
      // 第一梯队：有 order 的项。
      // 强制转换为数字，防止后端返回字符串数字
      weight = Number(orderValue)
    } else {
      // 第二梯队：没 order 的项。权重 = 巨大偏移量 + 原始索引
      weight = OFFSET + index
    }

    return {
      source: item, // 原始对象
      weight: weight, // 计算出的排序权重
    }
  })

  // 使用 lodash 的 orderBy 进行排序
  const sortedWrapped = orderBy(wrappedList, ['weight'], ['asc'])

  // 最后一步：解封，只返回原始对象数组
  return sortedWrapped.map((wrapper) => wrapper.source)
}

/**
 * 进阶工具：按指定的值序列排序
 *
 * @param list - 原始对象数组
 * @param field - 对象的属性名 (例如 'prop')
 * @param sequence - 期望的排序值数组 (例如 ['value2', 'value7', 'value4'])
 * @returns 排序后的数组
 */
export function sortBySequence<T>(list: T[], field: string, sequence: any[]): T[] {
  if (!Array.isArray(list)) return []

  // 1. 构造一个临时的“带权重”数组
  // 我们不需要修改原始对象，只需要给 sortByWeight 制造一个临时的排序字段
  const tempList = list.map((item) => {
    const value = get(item, field) // 获取对象中指定字段的值
    const seqIndex = sequence.indexOf(value) // 寻找在序列中的位置

    return {
      ...item,
      // 如果在序列中找到了，权重就是索引 (0, 1, 2...)
      // 如果没找到，indexOf 返回 -1，我们设为 undefined 让 sortByWeight 接手
      _virtualOrder: seqIndex === -1 ? undefined : seqIndex,
    }
  })

  // 2. 调用 sortByWeight 按照生成的虚拟权重排序
  const sortedList = sortByWeight(tempList, '_virtualOrder')

  // 3. 移除临时字段 _virtualOrder 并还原类型
  return sortedList.map((item: any) => {
    const { _virtualOrder, ...rest } = item
    return rest as T
  })
}
