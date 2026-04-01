/**
 * 校验工具类
 */
export const validator = {
  /**
   * 校验邮箱格式
   * @param value 邮箱字符串
   */
  isEmail: (value: string): boolean => {
    const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return reg.test(value)
  },

  /**
   * 校验中国大陆手机号
   * @param value 11位手机号
   */
  isPhone: (value: string): boolean => {
    const reg = /^1[3-9]\d{9}$/
    return reg.test(value)
  },
  /**
   * 中国居民身份证号码校验 (18位)
   * @param id 身份证号码字符串
   * @returns 是否合法
   */
  isIdCard: (id: string): boolean => {
    // 1. 基础格式校验：长度、地区、出生年月、顺序码、校验位
    const reg: RegExp =
      /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/

    if (!reg.test(id)) {
      return false
    }

    // 2. 校验码逻辑校验 (ISO 7064:1983.MOD 11-2 算法)

    // 权重因子
    const weights: number[] = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
    // 对应校验码
    const checkCodes: string[] = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']

    const code: string = id.toUpperCase()
    let sum: number = 0

    for (let i = 0; i < 17; i++) {
      // 将字符转为数字进行加权求和
      sum += parseInt(code[i] as string, 10) * weights[i]!
    }

    // 取模得到索引
    const index: number = sum % 11
    const lastChar: string = checkCodes[index]!

    // 判断计算出的校验码是否与身份证最后一位匹配
    return code[17] === lastChar
  },

  /**
   * 校验是否为外部链接 (URL)
   */
  isExternal: (path: string): boolean => {
    return /^(https?:|mailto:|tel:)/.test(path)
  },
}
