export {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
  useReducer,
  useImperativeHandle,
  useContext,
} from 'react'
// import { useReducer, useState, useContext } from 'react'
export { useLocation, useQuery, useRouter, useUpdateQuery, useParams } from './useRouter'
export { default as useScrollTop } from './useScrollTop'
// export { default as useLocalStorage } from './useLocalstorage'
// export { default as useTable } from './useTable'
export { default as useShallowEqualSelector } from './useShallowEqualSelector'
// import useShallowEqualSelector from './useShallowEqualSelector'
// import useScript from './useScript'
export { default as useDispatch } from './useDispatch'
// export { default as usePlainTable } from './usePlainTable'
// export { default as useTableWithQueryParams } from './useTableWithQueryParams'
// export { default as useKeys } from './useKeys'
// export { default as usePrevious } from './usePrevious'
// export { default as useForceUpdate } from './useForceUpdate'
// export { default as useScript } from './useScript'
// export { default as useInterval } from './useInterval'
// export * from './useMediaQuery'
// import { ModalContext } from '@/components/Modalman'

// export const useModalmanContext = () => useContext(ModalContext)

// const reducer = (prevState: any, updater: any) =>
//   typeof updater === 'function'
//     ? { ...prevState, ...updater(prevState) }
//     : { ...prevState, ...updater }
//
// const useMergeState = (initialState = {}) => useReducer(reducer, initialState)
//
// const useFunctionModule = () => {
//   return useShallowEqualSelector(state => {
//     return state.login.modules
//   })
// }
//
// const useInitialized = () => useState(false)
//
// const useAMap = () =>
//   useScript('https://webapi.amap.com/maps?v=1.4.15&key=9c0e5851d55cbe7ccd2865178d86e2ca')
// const useBMap = () =>
//   useScript(
//     'https://api.map.baidu.com/getscript?v=3.0&ak=e59ZKbGtFbC82qve1P5yzhAhM7YsRgGs&services=&t=20191018171908',
//   )

// export { useMergeState, useFunctionModule, useInitialized, useAMap, useBMap }
