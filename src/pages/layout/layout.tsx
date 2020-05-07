import { React } from '@/common';
import './layout.less';

interface ILayoutProps {
  children?: React.ReactNode | React.ReactNodeArray;
  [key: string]: any;
}

export default (props: ILayoutProps) => {
  const menus = [
    { type: 'a', label: '首页', value: '/' },
    { type: 'a', label: '新手入门', value: '/getStart' },
    { type: 'a', label: 'API', value: '/api' },
    { type: 'a', label: '关于', value: '/about' },
    { type: 'a', label: '注册', value: '/signIn' },
    { type: 'a', label: '登录', value: '/login' },
  ];
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

          <ul className="menu row-center">
            {menus.map((item, index) => (
              <li key={item.value + index}>{item.label}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="main">
        {props.children}
      </div>
    </>
  );
};
