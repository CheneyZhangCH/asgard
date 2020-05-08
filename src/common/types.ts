export { ColumnProps, TableProps } from 'antd/lib/table';
import { ColumnProps } from 'antd/lib/table';
export { SelectValue } from 'antd/lib/select';
export { Moment } from 'moment';
// export type { RouteComponentProps } from 'react-router'
import { Dispatch } from '@/common/store';
export { ClickParam } from 'antd/lib/menu';

export interface DispatchProp {
  dispatch: Dispatch;
}

export enum ColumnType {
  Time, // 标准日期 年月日 时分
  TimeShort, // 年月日
  DayTime, //hh:mm
  PersonName, // 人名
  Count, // 数量, 重量
  Address, // 回收机地址, 站点地址
  Province2Community, // 省/市/区/街道
  Province2Area, // 省/市/区/街道
  No, // 各种编号
  Status, //订单状态之类的, 5 个字符左右的状态描述, '机器完成' '人工完成'
  Comment, // 长评论
  Action, // 一个操作按钮
  Remark, // 备注
  Phone, // 11位电话号码
  ShortText, //5-10个字
  MoneyCent, // RMB 分
  Weight, // 不超过4个汉字
  Desc, // 原因描述, 失败原因等
  Fare,
  Dbm, // 网络信号dbm值
  TagInfo,
}

export interface AFLColumnProps<T = any> extends ColumnProps<T> {
  type?: ColumnType;
  visible?: boolean;
  digit?: number;
}
