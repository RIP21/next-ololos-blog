import React from 'react'
import Edit from 'features/Edit'
import withRedux from 'next-redux-wrapper'
import initStore from 'redux/store'
import withAuth from '../helpers/withAuth'
import get from 'lodash/get'
import { withData } from 'helpers/withData'

class EditPage extends React.Component {
  static async getInitialProps({ query, store }) {
    await withData(store)
    return { id: get(query, 'id') }
  }

  render() {
    return <Edit postId={this.props.id} />
  }
}

export default withRedux(initStore, null, {})(withAuth(EditPage, true))
