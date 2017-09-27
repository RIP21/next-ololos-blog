import Edit from './Edit'
import { connect } from 'react-redux'
import { createPost, updatePost } from 'redux/posts'
import { getPostById } from 'redux/selector/posts'
import { getCurrentAuthor } from 'redux/selector/authors'

const selector = (state, ownProps) => {
  return {
    post: getPostById(ownProps.postId)(state),
    author: getCurrentAuthor(state),
  }
}

export default connect(selector, {
  onPostCreate: createPost,
  onPostUpdate: updatePost,
})(Edit)
