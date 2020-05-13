import { Cookies, React, router } from '@/common'
import { useDispatch, useState } from '@/common/hooks'
import { Button } from '@/components'
import './layout.less'

interface ILayoutProps {
  children?: React.ReactNode | React.ReactNodeArray
  [key: string]: any
}

export default (props: ILayoutProps) => {
  const dispatch = useDispatch()
  const [hasLogin, setHasLogin] = useState(Cookies.get('token') as boolean)
  const logout = () => {
    dispatch.login.logOut().then(() => {
      setHasLogin(false)
      router.push('/')
    })
  }
  return (
    <>
      <div className="nav-bar">
        <div className="nav-bar-inner">
          <div className="row-center">
            <div className="log">Cnodejs</div>
            <div className="search">
              <input type="text" />
            </div>
          </div>

          <div className="menu row-center">
            <Button type="link" href="/post/new">
              发布话题
            </Button>
            {hasLogin ? (
              <Button type="link" onClick={logout}>
                登出
              </Button>
            ) : (
              <Button type="link" href="/login">
                登录
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="main">{props.children}</div>
    </>
  )
}
