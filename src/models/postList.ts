import { Dispatch } from '@/common/store'

export interface User {
  uid: string
  avator: string
}

export interface PostListItem {
  author: User
  lastCommentedBy: User
  tag: 'share' | 'qa' | 'hire'
  viewCount: number
  commentCount: number
  postTitle: string
  postId: string
  createdAt: Date
  lastCommentedAt: Date
}

export type PostListState = PostListItem[]

export const postList = {
  state: [] as PostListState,
  reducers: {
    setPostList(_state: PostListState, payload: PostListState): PostListState {
      return payload
    },
  },
  effects: (dispatch: Dispatch) => ({
    async requestPostList() {
      await new Promise((resolve) => setTimeout(resolve, 500))
      const user: User = { uid: 'admin', avator: '' }
      const post: PostListItem = {
        postId: '123',
        postTitle: 'test post',
        author: user,
        lastCommentedBy: user,
        tag: 'share',
        viewCount: 100,
        commentCount: 0,
        createdAt: new Date(),
        lastCommentedAt: new Date(),
      }
      dispatch.postList.setPostList([post])
    },
  }),
}
