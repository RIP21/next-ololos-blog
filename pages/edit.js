import React from 'react'
import Edit from 'features/Edit'
import get from 'lodash/get'
import { withAuth, withData, withRedux } from 'helpers'
import { createPost, updatePost } from 'redux/ducks/posts'
import { getPostById } from 'redux/selector/posts'
import { getCurrentAuthor } from 'redux/selector/authors'

class EditPage extends React.Component {
  static async getInitialProps(context) {
    await Promise.all([withData(context), withAuth(context, true)])
    return { id: get(context.query, 'id') }
  }

  render() {
    const { id: postId, ...props } = this.props
    return <Edit postId={postId} {...props} />
  }
}

const selector = (state, ownProps) => ({
  post: getPostById(ownProps.id)(state),
  author: getCurrentAuthor(state),
})

export default withRedux(selector, {
  onPostCreate: createPost,
  onPostUpdate: updatePost,
})(EditPage)
