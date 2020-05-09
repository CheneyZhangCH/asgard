import { login } from './login'
import { postList } from './postList'
import { ExtractRematchStateFromModels } from '@rematch/core'

export interface RootModel {
  login: typeof login
  postList: typeof postList
}

export const models: RootModel = {
  login,
  postList,
}

export type RootState = ExtractRematchStateFromModels<RootModel>
