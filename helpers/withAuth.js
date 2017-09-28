import Router from 'next/router'
import { load } from 'redux/ducks/auth'
import { isAuthenticated } from 'redux/selector/auth'

export default async function withAuth(context, needsAuth = false) {
  const { store, res, isServer } = context
  await store.dispatch(load())
  if (needsAuth) {
    const isAutheniticated = isAuthenticated(store.getState())
    isServer && !isAutheniticated && res.redirect('/login')
    !isServer && !isAutheniticated && Router.push('/login')
  }
}
