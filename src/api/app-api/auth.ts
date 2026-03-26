import { gApi } from '../gapi'
import { rsaEncrypt } from '@/utils/js-sign'

export async function apiLogin(data: { username: string; password: string }) {
  const { username, password } = data
  const res1 = await gApi.apiAuthPkinfoPost({
    secure: false,
  })
  const pk = res1.data
  if (!pk) {
    throw new Error('Failed to get public key')
  }
  const encryptedpwd = rsaEncrypt(password, pk)
  return gApi.apiAuthLoginPost(
    {
      authkey: username,
      password: encryptedpwd,
    },
    {
      secure: false,
    },
  )
}
