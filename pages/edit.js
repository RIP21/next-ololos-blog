import React from 'react'
import Edit from 'features/Edit'
import withRedux from 'next-redux-wrapper'
import initStore from 'redux/store'

const EditPage = () => {
  return <Edit />
}

export default withRedux(initStore, null, {})(EditPage)
