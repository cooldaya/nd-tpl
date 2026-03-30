import { cloneDeep } from 'lodash-es'
import * as XLSX from 'xlsx'

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
  data: any[],
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
