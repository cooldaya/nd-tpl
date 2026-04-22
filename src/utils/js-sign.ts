import JSEncrypt from 'jsencrypt'

export function rsaEncrypt(str: string, pemPk: string) {
  const encryptor = new JSEncrypt()
  encryptor.setPublicKey(pemPk)

  const encrypted = encryptor.encrypt(str) // 返回 Base64 字符串，失败时为 null / false
  if (!encrypted) {
    throw new Error('RSA encryption failed')
  }

  // JSEncrypt 的 encrypt 已经是 Base64，和你原来的 hextob64(encHex) 对齐
  return encrypted
}

/**
 * 解密 JWT token 的信息
 * @param token jwt token 字符串
 * @returns <any>object
 */
export function decryptJWT(token: string) {
  token = token.replace(/_/g, '/').replace(/-/g, '+')
  const json = decodeURIComponent(escape(window.atob(token.split('.')[1] as string)))
  return JSON.parse(json)
}
