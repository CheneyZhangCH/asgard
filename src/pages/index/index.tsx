import { React } from '@/common'
import './index.less'
import { useDispatch, useEffect } from '@/common/hooks'
import { useSelector } from 'react-redux'
import { RootState } from '@/models'
import { PostListState } from '@/models/postList'

const Index = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch.postList.requestPostList()
  }, [])

  const postList = useSelector<RootState, PostListState>((rootState) => rootState.postList)

  return (
    <>
      <div className="list">
        <ul>
          {postList.map((item) => (
            <li key={item.postId}>{item.postTitle}</li>
          ))}
        </ul>
      </div>
      <div className="info">info</div>
    </>
  )
}

export default Index
