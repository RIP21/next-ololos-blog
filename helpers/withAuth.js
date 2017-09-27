import React from 'react'
import { load } from '../redux/auth'
import { isAuthenticated } from '../redux/selector/auth'
import Router from 'next/router'
import { IS_SERVER } from '../constants/common'
import invoke from 'lodash/invoke'

const withAuth = (Page, needsAuth = false) =>
  class extends React.Component {
    static async getInitialProps(context) {
      const { res, store } = context
      const childProps = await invoke(Page, 'getInitialProps', context)
      await store.dispatch(load())
      if (needsAuth) {
        const isAutheniticated = isAuthenticated(store.getState())
        IS_SERVER && !isAutheniticated && res.redirect('/login')
        !IS_SERVER && !isAutheniticated && Router.push('/login')
      }
      return { ...childProps }
    }

    render() {
      return <Page {...this.props} />
    }
  }

export default withAuth
