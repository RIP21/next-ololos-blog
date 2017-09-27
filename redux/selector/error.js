import { createSelector } from 'reselect'

export const getState = state => state.error

export const getError = createSelector(getState, state => state.error.message)

export const isOpen = createSelector(getState, state => state.show)
