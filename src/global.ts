import 'antd-mobile/dist/antd-mobile.less';
import { message } from 'antd';
import 'moment/locale/zh-cn';
import moment from 'moment';
// import { Sentry, dispatch, tracker } from '@/common'
import 'antd/dist/antd.css';
// import { isLogined } from '@/common/utils'

// if (isLogined()) {
//   dispatch.login.fetchFunctionModules()
// }

moment.locale('zh-cn');
window.moment = moment;

window.SCROLL = {};
message.config({
  top: 50,
  duration: 1.5,
  maxCount: 3,
});

// if (ENV === 'production') {
// Sentry.init({
//   dsn: 'https://1d0ade095020458f9a67f6a5f34bef79@sentry.aihuishou.com/66',
//   environment: 'production',
// })
// const account = localStorage.getItem('USER_NAME')
// Sentry.setUser({
//   account,
// })
// tracker.setVar('account', account)
// }

window.addEventListener('online', () => {
  message.success('网络连接已恢复');
});

window.addEventListener('offline', () => {
  message.warn('似乎已断开与互联网的连接');
});

// console.log(
//   '%c    ',
//   'background: url(http://drdbsz.oss-cn-shenzhen.aliyuncs.com/190605181243378260358.jpeg) no-repeat left center;font-size: 300px;',
//   '\n',
// );
