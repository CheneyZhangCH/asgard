import React from 'react'
import { Provider } from 'react-redux'
import store, { dispatch } from '@/common/store'
import router from '@/common/router'
// import { tracker } from '@/common'
import initDynamicModel from '@/models/dynamic'
// import { ModalProvider } from '@/components/Modalman'
// import { PreviewProvider } from '@/components/ImagePreview/context'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

export function rootContainer(container: React.ComponentType) {
  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
          {container}
      </Provider>
    </ConfigProvider>
  )
}

// export function onRouteChange({ location }: any) {
//   if (ENV === 'production') {
//     tracker.trackPv(location.pathname)
//   }
// }

export function render(oldRender: Function) {
  if (!localStorage.getItem('token')) {
    router.gotoLogin()
    oldRender()
    return
  }
  oldRender()

  // dispatch.login.fetchFunctionModules().then((modules: string[]) => {
  //   initDynamicModel(modules)
  //   oldRender()
  // })
}
