import { message } from 'antd';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// import { Sentry } from '@/common'
import { router } from '@/common';
import { qsStringify } from './search';

const LOGIN_ERROR_CODE = 10300001;

const ENV_prefix = window.location.href.indexOf('uat-') !== -1 ? `uat-` : '';
const baseURL = /^http/.test(apiHost)
  ? apiHost
  : `${window.location.protocol}//${ENV_prefix}${apiHost}`;
const defaultConfig: AxiosRequestConfig = {
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    // AppId: AppId,
  },
  responseType: 'json',
  timeout: 10000,
  validateStatus: (status: number) => status >= 200 && status < 300,
};

axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axios.interceptors.response.use(response => {
  if (response.data && response.data.code === LOGIN_ERROR_CODE) {
    localStorage.removeItem('token');
    router.gotoLogin();
  }
  if (response.data && response.data.code > 200) {
    message.error(response.data.resultMessage);
  }
  return response;
});

const IGNORE_ERROR: any[] = [];
axios.interceptors.response.use(
  config => config,
  error => {
    // Sentry.captureException(error)
    if (error.config && error.config.method === 'options') {
      // do noting
    } else if (error.response && error.response.status >= 500) {
      if (IGNORE_ERROR.some(path => error.config.url.indexOf(path) !== -1)) {
        return;
      }

      console.error(error);
      message.error(
        `${error.response.statusText} (${error.response.status}) : ${error.request.responseURL} `,
      );
    } else if (
      (error.response && error.response.status === 408) ||
      error.code === 'ECONNABORTED'
    ) {
      message.error(`请求超时 : ${error.config.url}`);
    } else if (error.response && error.response.status === 404) {
      // 日志收集!
    }
    return Promise.reject(error);
  },
);

const R = <T = ResponseData<any>>(options: AxiosRequestConfig): Promise<T> => {
  let { url, method = 'GET', data } = options;

  if (method === 'GET' && data) {
    url = `${url}?${qsStringify(data)}`;
  }

  return axios({ ...defaultConfig, ...options, url })
    .then((resp: AxiosResponse<T>) => {
      return resp.data;
    })
    .catch(resp => {
      if (resp.response && resp.response.data && resp.response.data.message) {
        message.error(resp.response.data.message);
      }
      return Promise.reject(resp);
    });
};

window.R = R;
export default R;
