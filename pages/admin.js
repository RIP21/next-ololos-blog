import React from 'react'
import Admin from 'features/Admin'
import { getSortedByDatePosts } from '../redux/selector/posts'
import { withData, withRedux, withAuth } from 'helpers'
import { deletePost } from 'redux/ducks/posts'

class AdminPage extends React.Component {
  static async getInitialProps(context) {
    await Promise.all([withData(context), withAuth(context, true)])
  }

  render() {
    return <Admin {...this.props} />
  }
}

const selector = state => ({
  posts: getSortedByDatePosts(state),
})

export default withRedux(selector, { onDelete: deletePost })(AdminPage)
