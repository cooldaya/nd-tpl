import localforage from 'localforage'
import { AES, Utf8 } from 'crypto-es'
import { projectConfig } from '~/project-config'

// 这里的 Key 建议从配置读取，或者定义一个固定字符串
const CRYPTO_KEY = 'ldq9hj18trc'

const wrap = (key: string) => `${projectConfig.name}-${key}`

// 原始的 localforage 实例
const rawInstance = localforage.createInstance({
  name: wrap('store1'),
})

/**
 * 封装后的加密存储对象
 */
const localStore = {
  /**
   * 存储数据：对象/数组/字符串 -> 加密字符串
   */
  async setItem<T>(key: string, value: T): Promise<T> {
    try {
      // 1. 将数据转为 JSON 字符串
      const str = JSON.stringify(value)
      // 2. 加密
      const encrypted = AES.encrypt(str, CRYPTO_KEY).toString()
      // 3. 存储密文
      await rawInstance.setItem(key, encrypted)
      return value
    } catch (error) {
      console.error('localStore setItem error:', error)
      throw error
    }
  },

  /**
   * 读取数据：密文 -> 解密 -> 还原对象
   */
  async getItem<T>(key: string): Promise<T | null> {
    try {
      const encrypted = await rawInstance.getItem<string>(key)
      if (!encrypted) return null

      // 1. 解密
      const bytes = AES.decrypt(encrypted, CRYPTO_KEY)
      const decryptedStr = bytes.toString(Utf8)

      if (!decryptedStr) return null

      // 2. 解析 JSON
      return JSON.parse(decryptedStr) as T
    } catch (error) {
      console.error('localStore getItem error (possibly decryption failed):', error)
      return null
    }
  },

  /**
   * 移除某项
   */
  async removeItem(key: string): Promise<void> {
    await rawInstance.removeItem(key)
  },

  /**
   * 清空所有
   */
  async clear(): Promise<void> {
    await rawInstance.clear()
  },

  /**
   * 获取所有 key
   */
  async keys(): Promise<string[]> {
    return await rawInstance.keys()
  },

  /**
   * 获取存储长度
   */
  async length(): Promise<number> {
    return await rawInstance.length()
  },
}

export { localStore }
