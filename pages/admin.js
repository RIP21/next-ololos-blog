import React from 'react'
import Admin from 'features/Admin'
import withRedux from 'next-redux-wrapper'
import initStore from 'redux/store'
import { createStructuredSelector } from 'reselect'
import withAuth from '../helpers/withAuth'
import { getSortedByDatePosts } from '../redux/selector/posts'
import { withData } from 'helpers/withData'
import { deletePost } from 'redux/posts'

class AdminPage extends React.Component {
  static async getInitialProps({ store }) {
    await withData(store)
  }
  render() {
    return <Admin {...this.props} />
  }
}

const selector = state => ({
  posts: getSortedByDatePosts(state),
})

export default withRedux(initStore, selector, { onDelete: deletePost })(
  withAuth(AdminPage, true),
)
