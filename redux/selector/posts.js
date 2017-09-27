import { createSelector } from 'reselect'
import find from 'lodash/find'
import filter from 'lodash/filter'
import intersectionBy from 'lodash/intersectionBy'

export const getState = state => state.posts

export const getPosts = createSelector(getState, state => state.posts)

export const getPostById = id =>
  createSelector(getPosts, posts => find(posts, post => post.id === id) || null)

export const getSortedByDatePosts = createSelector(getPosts, posts =>
  [...posts].sort(
    (prev, next) => new Date(next.postdate) - new Date(prev.postdate),
  ),
)

export const getPublishedPosts = createSelector(getPosts, posts =>
  filter(posts, post => post.published),
)

export const getSortedAndPublishedPosts = createSelector(
  getSortedByDatePosts,
  getPublishedPosts,
  (sorted, published) => intersectionBy(sorted, published, 'id'),
)

export const getIsLoaded = createSelector(getState, state => state.loaded)
