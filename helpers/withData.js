import { loadAuthors } from 'redux/authors'
import { loadPosts } from 'redux/posts'
import { getIsLoaded as isPostsLoaded } from 'redux/selector/posts'
import { getIsLoaded as isAuthorsLoaded } from 'redux/selector/authors'

export async function withData(store) {
  const state = store.getState()
  if (!isPostsLoaded(state) && !isAuthorsLoaded(state)) {
    await Promise.all([
      store.dispatch(loadPosts()),
      store.dispatch(loadAuthors()),
    ])
  }
}
