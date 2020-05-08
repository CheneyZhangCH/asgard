declare module '*.css';
declare module '*.png';
declare module '*.jpg';
declare module '*.json';
declare module '*.js';
declare module '*.less' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

// global
interface Window {
  Store: any;
  React: any;
  Promise: Promise<any> | null;
  R: any;
  g_app: any;
  moment: any;
  requestIdleCallback: any;
  SCROLL: any;
  BMap: any;
  AMap: any;
  _czc?: any;
}

interface AnyState {
  [whatever: string]: any;
}

interface AnyAction {
  type: string;
  payload: any;
}

interface ListReponseData<T> extends ResponseData<T> {
  page: number;
  pageSize: number;
  totalCount: number;
}

interface ResponseData<T = any> {
  code: number;
  data: T;
  resultMessage: string;
}

interface WhateverKV {
  [whatever: string]: any;
}

type AnyPayload = any;

interface APIData<T = any> {
  code: number;
  data: T;
  resultMessage: string;
}

interface MenuRoute {
  url: string;
  title: string;
  match: string;
  icon: string;
  children?: MenuRoute[];
  parent?: MenuRoute;
}

interface LatLng {
  longitude: number;
  latitude: number;
}

declare const BMap: any;
declare const AMap: any;
declare const AMapUI: any;
declare const apiHost: string;
declare const ossBaseUrl: string;
declare const AppId: string;
declare const ENV: string;
declare const SCROLL: {};

// npm library
declare module 'deep-diff' {
  export default (a: any, b: any) => any;
}

declare module 'react-full-screen';
declare module 'react-images-viewer';
declare module 'react-images';
declare module 'styled-components';

// 编辑器组件数据 Component
interface ComponentData {
  type: string;
  id: string;
  props: any;
  title: string;
  configs: ConfigItem[];
  content: ComponentData[];
}

interface RouteData {
  url: string;
  params: any[];
}

interface ConfigItem {
  type: string;
  options: any;
  subType: string;
  title: string;
  path: string;
}

interface ImageItem {
  id: string;
  src: string;
  text: string;
}

// Rematch Model
interface MClearanceMan {
  communityCount: number;
  machineCount: number;
  phone: string;
  pointCount: number;
  rfidCardCount: number;
  userCode: string;
  userName: string;
}

interface ClearanceManState {
  code: number;
  data: MClearanceMan[];
  page: number;
  pageSize: number;
  resultMessage: string;
  totalCount: number;
}

// 业务 Model
interface OSSCredential {
  accessKeyId: string;
  accessKeySecret: string;
  bucket: string;
  endpoint: string;
  expireAt: string;
  path: string;
  securityToken: string;
}
