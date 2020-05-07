import _ from 'lodash'

const fareRule = {
  required: true,
  pattern: /^\d{1,5}(\.\d{1,2})?$/,
  message: '不超过5位数，最多精确到0.01',
}

const rateRule = {
  required: true,
  pattern: /(^100$)|(^100\.0$)|(^100\.00$)|(^\d{1,2}(\.\d{1,2})?$)/,
  message: '不大于100，最多精确到0.01',
}

const minuteRule = {
  required: true,
  pattern: /^\d{1,3}$/,
  message: '不超过3位整数，精确到个位',
}

const integerRule = (range = { min: 1, max: 11 }) => {
  return {
    required: true,
    pattern: /^\d{1,11}$/,
    message: `请输入不小于${range.min}位且不大于${range.max}位的整数`,
  }
}

const bankNoRule = { required: true, pattern: /^(\d{5,19})$/, message: '请输入正确的银行卡卡号' }

const lnglatValidator = (rule: any, value: string, callback: any) => {
  try {
    const [lng, lat] = value.split(',')
    const regLng = /^[\-\+]?(0(\.\d+)?|([1-9](\d)?)(\.\d+)?|1[0-7]\d{1}(\.\d+)?|180\.0+)$/
    const regLat = /^[\-\+]?((0|([1-8]\d?))(\.\d+)?|90(\.0+)?)$/
    if (!regLng.test(lng) || !regLat.test(lat)) {
      callback('格式不正确')
    }
    callback()
  } catch (err) {
    callback('格式不正确')
  }
}

const lngValidator = {
  pattern: /^[\-\+]?(0(\.\d+)?|([1-9](\d)?)(\.\d+)?|1[0-7]\d{1}(\.\d+)?|180\.0+)$/,
  message: '格式不正确',
}

const latValidator = {
  pattern: /^[\-\+]?((0|([1-8]\d?))(\.\d+)?|90(\.0+)?)$/,
  message: '格式不正确',
}

const intValidator = { pattern: /^\d+$/, message: '请输入正确的整数' }
const floatValidator = { pattern: /^(\d+)(.(\d+))?$/, message: '请输入正确的数字' }

const phoneNoRule = {
  required: true,
  pattern: /^1[3-9]\d{9}$/,
  message: '请输入正确的手机号码',
}

const rfidCardCountRule = {
  required: true,
  pattern: /^[0-9]{1,4}$/,
  message: '回收卡数量应为1-4位数字',
}

const IDNoRule = {
  required: true,
  pattern: /^(\d{17})[0123456789X]$/,
  message: '请输入正确的身份证号码, 最后一位应为数字或大写X',
}

// 包含普通车、新能源车车牌校验, 不包含特种车辆
const carNoRule = {
  required: true,
  pattern: /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼])([A-HJ-NP-Z])(([A-HJ-NP-Z0-9]{5}$)|([DF][A-HJ-NP-Z0-9]([0-9]{4})$)|([0-9]{5}[DF]$))/,
  message: '请输入正确的车牌号码, 字母均为大写',
}

const accountRule = {
  required: true,
  pattern: /^[a-zA-Z0-9]{6,}$/,
  message: '账户应为6位及以上大小写英文字母或数字',
}

const passwordRule = {
  required: true,
  pattern: /^[a-zA-Z0-9]{6,11}$/,
  message: '密码应为6-11位大小写英文字母或数字',
}

const numberArrayValidator = (
  rule: any,
  value: any,
  callback: any,
  source?: any,
  options?: any,
) => {
  if (!Array.isArray(value) || !value.every((v) => Number.isFinite(_.toNumber(v)))) {
    callback('请确保填入的值是下拉列表中的选项, 或者为纯数字')
  }
  callback()
}

const containSpaceValidator = (rule: any, value: string[], callback: any) => {
  if (value.some((v) => v.includes(' '))) {
    callback('值不能包含空格')
    return
  }
  callback()
}

export default {
  accountRule,
  bankNoRule,
  floatValidator,
  numberArrayValidator,
  intValidator,
  carNoRule,
  fareRule,
  integerRule,
  minuteRule,
  rateRule,
  IDNoRule,
  lnglatValidator,
  lngValidator,
  latValidator,
  phoneNoRule,
  passwordRule,
  rfidCardCountRule,
  containSpaceValidator,
}
