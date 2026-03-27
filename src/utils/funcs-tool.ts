import { cloneDeep } from 'lodash-es'

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
