import { createSelector } from 'reselect'

export const postsSelector = state => state.posts.posts
export const authorsSelector = state => state.authors.authors

export const sortNewPostsFirstSelector = createSelector(postsSelector, posts =>
  [...posts].sort(
    (prev, next) => new Date(next.postdate) - new Date(prev.postdate),
  ),
)
