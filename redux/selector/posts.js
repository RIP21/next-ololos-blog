import { createSelector } from 'reselect'
import find from 'lodash/find'

export const getState = state => state.posts

export const getPosts = createSelector(getState, state => state.posts)

export const getPostById = id =>
  createSelector(getPosts, posts => find(posts, post => post.id === id) || null)

export const getSortedByDatePosts = createSelector(getPosts, posts =>
  [...posts].sort(
    (prev, next) => new Date(next.postdate) - new Date(prev.postdate),
  ),
)
