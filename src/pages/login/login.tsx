import { React, customValidator, qs, router } from '@/common'
import { Form, Input, Button, Checkbox } from 'antd'
import { PhoneOutlined, LockOutlined } from '@ant-design/icons'
import './login.less'
import { useDispatch } from '@/common/hooks'
import { Store } from 'antd/lib/form/interface'

const Login: React.FC = () => {
  const dispatch = useDispatch()
  const onFinish = (values: Store) => {
    dispatch.login.login(values).then((res: ResponseData) => {
      if (res.code === 200) {
        const query = qs.parse(location.search, { ignoreQueryPrefix: true })
        router.replace(query.redirect ?? '/')
      }
    })
  }

  return (
    <div className="login-wrapper">
      <Form
        name="login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入手机号码' }, customValidator.phoneNoRule]}
        >
          <Input
            prefix={<PhoneOutlined className="site-form-item-icon" />}
            placeholder="请输入手机号码, 新用户将自动注册"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '请输入6-11位密码, 应至少包含数字及字母',
            },
            customValidator.passwordRule,
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="请输入6-11位密码, 至少包含数字及字母"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住密码</Checkbox>
          </Form.Item>

          {/*<a className="login-form-forgot" href="">*/}
          {/*  Forgot password*/}
          {/*</a>*/}
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
          {/*Or <a href="">register now!</a>*/}
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
