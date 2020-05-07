import { useEffect, DependencyList } from 'react'

const useScrollTop = (dep: DependencyList = []) => {
  useEffect(() => {
    const container = document.getElementById('scrollContainer')
    if (container) {
      container?.scrollTo(0, 0)
    }
  }, dep)
}

export default useScrollTop
