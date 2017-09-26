import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from 'redux/reducer'
import clientMiddleware from 'helpers/promiseMiddleware'
import ApiClient from 'helpers/ApiClient'

/**
 * Return store
 *
 * @param {object} history History
 * @param {object} initialState Initial state for store
 * @return {object} Returns store with state
 */

const client = new ApiClient()

export default function(initialState = {}) {
  let finalCreateStore
  if (process.env.NODE_ENV === 'development') {
    finalCreateStore = compose(
      applyMiddleware(clientMiddleware(client)),
      applyMiddleware(thunk),
      typeof window === 'object' &&
      typeof window.devToolsExtension !== 'undefined'
        ? window.devToolsExtension()
        : f => f,
    )(createStore)
  } else {
    finalCreateStore = compose(
      applyMiddleware(clientMiddleware(client)),
      applyMiddleware(thunk),
    )(createStore)
  }

  return finalCreateStore(rootReducer, initialState)
}
