import { combineReducers } from 'redux'

import auth from './auth'
import authors from './authors'
import posts from './posts'
import error from './error'

export default combineReducers({
  auth,
  authors,
  posts,
  error,
})
