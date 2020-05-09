import { R } from '@/common'
import { Dispatch } from '@/common/store'

export const login = {
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
  effects: (dispatch: Dispatch) => ({
    async login(payload: any) {
      const resp = await R({
        url: '/api/auth/login',
        method: 'POST',
        data: payload,
      })
      console.log(resp)
      dispatch.login.loginData(resp.data)
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
