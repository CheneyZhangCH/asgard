import { Cookies, R } from '@/common'
import { Dispatch } from '@/common/store'

export const login = {
  state: {
    token: localStorage.getItem('token'),
  },
  reducers: {
    loginData(_: AnyState, payload: AnyPayload) {
      if (payload && payload.data && payload.data.token) {
        Cookies.set('token', payload.data.token)
      }
      return payload.data || { token: null }
    },
  },
  effects: (dispatch: Dispatch) => ({
    async login(payload: any) {
      const res = await R({
        url: '/api/auth/login',
        method: 'POST',
        data: payload,
      })
      dispatch.login.loginData(res)
      return res
    },
    async logOut() {
      Cookies.remove('token')
      return {
        token: null,
      }
    },
  }),
}
