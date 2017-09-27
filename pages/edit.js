import React from 'react'
import Edit from 'features/Edit'
import withRedux from 'next-redux-wrapper'
import initStore from 'redux/store'
import { loadPosts } from 'redux/posts'
import withAuth from '../helpers/withAuth'

class EditPage extends React.Component {
  static async getInitialProps({ query, store}) {
    await store.dispatch(loadPosts())
    return { id: query.id }
  }

  render() {
    return <Edit postId={this.props.id} />
  }
}

export default withRedux(initStore, null, {})(withAuth(EditPage, true))
