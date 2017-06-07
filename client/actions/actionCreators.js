import * as types from './actionTypes'

export const increment = index =>
  ({ type: types.INCREMENT_LIKES, index })

export const decrement = index =>
  ({ type: types.DECREMENT_LIKES, index })

export const addComment = (postId, author, comment) =>
  ({ type: types.ADD_COMMENT, postId, author, comment })

export const removeComment = (postId, index) =>
  ({ type: types.REMOVE_COMMENT, index, postId })

export const loadPostsSuccess = posts =>
  ({ type: types.LOAD_POSTS_SUCCESS, posts })

export const loadCommentsSuccess = (postId, comments) =>
  ({ type: types.LOAD_COMMENTS_SUCCESS, postId, comments })
