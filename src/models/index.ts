import { login } from './login'
import { postList } from './postList'

export interface RootModel {
  login: typeof login
  postList: typeof postList
}

export const models: RootModel = {
  login,
  postList,
}
