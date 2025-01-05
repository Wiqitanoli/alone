import { api } from 'src/services'
import { userStorage } from 'src/store/user'

export default function (): void {
  let token = userStorage.get()?.token
  if (token !== undefined)
    api.setSecurityData(token)
}
