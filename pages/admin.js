import React from 'react'
import Admin from 'features/Admin'
import withRedux from 'next-redux-wrapper'
import initStore from 'redux/store'

const AdminPage = () => {
  return <Admin />
}

export default withRedux(initStore, null, {})(AdminPage)
