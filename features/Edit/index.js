import Edit from './Edit'
import { connect } from 'react-redux'
import { createPost, updatePost } from 'redux/posts'
import { getPostById } from 'redux/selector/posts'

const selector = (state, ownProps) => {
  return {
    post: getPostById(ownProps.postId)(state),
  }
}

export default connect(selector, {
  onPostCreate: createPost,
  onPostUpdate: updatePost,
})(Edit)
