import { useSelector, shallowEqual } from 'react-redux'
import { RootState } from '../store'

export default function useShallowEqualSelector<State>(selector: (state: RootState) => State) {
  return useSelector(selector, shallowEqual)
}
