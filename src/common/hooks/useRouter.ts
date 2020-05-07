// @ts-ignore
import { __RouterContext as RouterContext, RouteComponentProps } from 'react-router'
import { useContext, useMemo, useCallback } from 'react'
import qs from 'qs'
import { Location } from 'history'

interface ParsedQuery {
  [whatever: string]: any
}

export const useRouter = <T>(): RouteComponentProps<T> =>
  useContext(RouterContext) as RouteComponentProps<T>

export const useLocation = (): Location => {
  const { location } = useRouter()
  return location
}

export const useParams = <T>(): T => {
  const { location, match } = useRouter<T>()
  // @ts-ignore
  return { ...location.query, ...match.params }
}

export const _useQuery = <T extends ParsedQuery>(): T => {
  // @ts-ignore
  const { query } = useLocation()
  const q = useMemo(() => qs.parse(query), [query])
  return q as T
}

export const useUpdateQuery = <T extends ParsedQuery>() => {
  const { history } = useRouter()
  const query = _useQuery<T>()
  const updateQuery = useCallback(
    (patch: Partial<T>, merge = true): void => {
      const newQuery = merge ? { ...query, ...patch } : patch
      const newSearch = qs.stringify(newQuery)
      history.push({ search: newSearch })
    },
    [history, query],
  )
  return updateQuery
}

type UpdateQueryType = (query: Partial<ParsedQuery>, merge?: boolean) => void
export const useQuery = (): [ParsedQuery, UpdateQueryType] => {
  return [_useQuery(), useUpdateQuery()]
}
