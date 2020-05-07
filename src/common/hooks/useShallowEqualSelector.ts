import { useSelector, shallowEqual } from 'react-redux'
import { RootState } from '../store'

export default function useShallowEqualSelector<T extends any>(selector: (state: RootState) => T) {
  return useSelector(selector, shallowEqual)
}
