import { init, RematchDispatch, ExtractRematchStateFromModels } from '@rematch/core'
import { models, RootModel } from '../models'
import createLoadingPlugin from '@rematch/loading'

const loading = createLoadingPlugin({
  asNumber: true,
  blacklist: [
    'clearanceManManager/fetchUnsignedPoints',
    'clearanceManManager/fetchPartnerByName',
    'contractorManager/fetchContractorByName',
    'pubClearSettlement/fetchSiteByCityCode',
    'purchaseOrder/fetchConstractors',
    'commoditySystem/checkCategoryName',
    'commoditySystem/checkCategorySon',
    'commoditySystem/checkAttributeName',
    'commoditySystem/checkProductName',
    'commoditySystem/checkProductSon',
    'commoditySystem/checkProductStatus',
    'commoditySystem/checkProductAttribute',
    'commoditySystem/queryProducts',
    'commoditySystem/getProductDetail',
  ],
})

export const store = init<RootModel>({
  models,
  plugins: [loading],
})

window.Store = store

export type Dispatch = RematchDispatch<RootModel>

export type RootState = ExtractRematchStateFromModels<RootModel>

export const dispatch: Dispatch = store.dispatch
