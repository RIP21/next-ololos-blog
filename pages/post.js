import React from 'react'
import withRedux from 'next-redux-wrapper'
import initStore from 'redux/store'
import withAuth from '../helpers/withAuth'
import { getPostById } from '../redux/selector/posts'
import Post from '../features/Post/Post'
import Layout from '../components/Layout'
import { ABSOLUTE_HOST_PATH } from 'constants/common'
import { withData } from 'helpers/withData'

class PostPage extends React.Component {
  static async getInitialProps({ query: { id }, store }) {
    await withData(store)
    return { id }
  }

  getMeta = () => {
    const { id, title, description, previewPic, author } = this.props.post
    return {
      title,
      description,
      image: `${ABSOLUTE_HOST_PATH}${previewPic}`,
      url: `${ABSOLUTE_HOST_PATH}/post/${id}`,
      author: author.authorName,
    }
  }

  render() {
    const { post } = this.props
    return (
      <Layout as="article" title={post.title} meta={this.getMeta()}>
        <Post post={post} />
      </Layout>
    )
  }
}

const selector = (state, ownProps) => ({
  post: getPostById(ownProps.id)(state),
})

export default withRedux(initStore, selector, {})(withAuth(PostPage))
