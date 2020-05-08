import { parse, stringify } from 'qs'
// import { WrappedFormUtils } from 'antd/lib/form/Form'
import router from './router'
import { v4 as uuid } from 'uuid'

export const qsParse = (search: string) => {
  return search[0] === '?' ? parse(search.slice(1)) : parse(search)
}

export const search2State = (search: string) => {
  const s = qsParse(search)
  if (Reflect.has(s, 'randomId')) {
    Reflect.deleteProperty(s, 'randomId')
  }
  return s
}

export const qsStringify = (search: { [key: string]: any }) => {
  Object.keys(search).forEach((key) => {
    const value = search[key]
    if (!value) {
      delete search[key]
    } else if (typeof value === 'string') {
      search[key] = value.trim()
    }
  })
  return Object.keys(search) ? stringify(search) : ''
}

export const searchDidChange = (props: any, prevProps: any) => {
  const searchChange = props.location.search !== prevProps.location.search
  const pathnameChange = props.location.pathname !== prevProps.location.pathname
  return searchChange && !pathnameChange
}

// export const initSearch = (form: WrappedFormUtils, search: SearchParam) => {
//   form.setFieldsValue(search)
// }

export const pushNewSearch = (newSearch: any) => {
  const qs = qsStringify(newSearch)
  router.push(`${location.pathname}?randomId=${uuid()}${qs ? `&${qs}` : ''}`)
}

export interface SearchParam {
  [param: string]: string
}
