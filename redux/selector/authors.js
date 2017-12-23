import { createSelector } from 'reselect'
import find from 'lodash/find'
import { getUser } from 'redux/selector/auth'

export const getState = state => state.authors

export const getAuthors = createSelector(getState, state => state.authors)

export const getAuthorsById = id =>
  createSelector(getAuthors, authors => find(authors, author => author.id === id) || null)

export const getCurrentAuthor = createSelector(
  getAuthors,
  getUser,
  (authors, user) => find(authors, author => author.id === user.userName) || null,
)

export const getIsLoaded = createSelector(getState, state => state.loaded)
