import { R } from '@/common'
import { RematchDispatch } from '@/common/store'

export default {
  state: {
    token: localStorage.getItem('token'),
  },
  reducers: {
    loginData(_: AnyState, payload: AnyPayload) {
      if (payload && payload.data && payload.data.token) {
        localStorage.setItem('modules', payload.data.modules)
        localStorage.setItem('token', payload.data.token)
      }
      return payload.data || { token: null }
    },
  },
  effects: (dispatch: RematchDispatch) => ({
    async login(payload) {
      const loginData = await R({ url: '/api/auth/login', method: 'POST', data: payload })
      console.log(loginData)
      return loginData
    },
    async logOut() {
      localStorage.removeItem('token')
      localStorage.removeItem('USER_NAME')
      return {
        token: null,
        modules: [],
        user: {
          name: null,
        },
      }
    },
  }),
}
