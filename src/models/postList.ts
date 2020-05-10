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
      const user: User = {
        uid: 'admin',
        avator:
          'https://img2.woyaogexing.com/2020/05/09/f0675205075e41e08cbc13a18f15bced!400x400.webp',
      }
      const post: PostListItem = {
        postId: '123',
        postTitle: '关于我转生成为史莱姆这件事',
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
