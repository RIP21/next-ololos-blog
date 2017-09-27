import { createSelector } from 'reselect'

export const getState = state => state.auth

export const isAuthenticated = createSelector(
  getState,
  state => state.user !== null,
)
