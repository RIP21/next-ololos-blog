import { loadAuthors } from 'redux/ducks/authors'
import { loadPosts } from 'redux/ducks/posts'
import { getIsLoaded as isPostsLoaded } from 'redux/selector/posts'
import { getIsLoaded as isAuthorsLoaded } from 'redux/selector/authors'

export default async function withData({ store }) {
  const state = store.getState()
  if (!isPostsLoaded(state) && !isAuthorsLoaded(state)) {
    await Promise.all([store.dispatch(loadPosts()), store.dispatch(loadAuthors())])
  }
}
