import { localStore } from '@/utils/local-store'

type RememberAccount = {
  username: string
  password: string
  expiresIn: number
}
class RememberAccountTool {
  saveKey = 'rememberAccount'
  async getRememberAccount(): Promise<RememberAccount | undefined> {
    try {
      const accountObj = (await localStore.getItem(this.saveKey)) as RememberAccount | undefined
      if (!accountObj) return undefined
      if (accountObj.expiresIn && accountObj.expiresIn < Date.now()) {
        return undefined
      }
      return accountObj
    } catch (error) {
      return undefined
    }
  }

  async saveRememberAccount(account: Omit<RememberAccount, 'expiresIn'>): Promise<void> {
    await localStore.setItem(this.saveKey, {
      ...account,
      expiresIn: Date.now() + 1000 * 60 * 60 * 24 * 30, // 30 days
    })
  }

  async clearRememberAccount(): Promise<void> {
    await localStore.removeItem(this.saveKey)
  }
}

const rememberAccountTool = new RememberAccountTool()
export { rememberAccountTool }
