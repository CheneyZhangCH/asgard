import { React } from '@/common'
import './index.less'
import { useDispatch, useEffect, useShallowEqualSelector } from '@/common/hooks'
import { PostListState } from '@/models/postList'

const Index = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch.postList.requestPostList()
  }, [])

  const postList = useShallowEqualSelector<PostListState>((rootState) => rootState.postList)

  return (
    <>
      <div className="list">
        <ul>
          {postList.map((item) => (
            <li className="post-list-item" key={item.postId}>
              <a className="user-avator" href={item.author.uid}>
                <img src={item.author.avator} />
              </a>
              <div className="center">
                <span className="normal-tag">分享</span>
                <div className="post-title-box">
                  <a className="post-title" href={item.postId}>
                    {item.postTitle}
                  </a>
                  <span className="reply-count">{item.viewCount}</span>
                </div>
              </div>
              <a className="last-active-time">1小时之前</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="info">info</div>
    </>
  )
}

export default Index
