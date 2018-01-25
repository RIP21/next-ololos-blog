import { nameToProp } from 'apollo'
import GetPostByVerboseId from 'apollo/graphcool/queries/GetPostByVerboseId'
import React from 'react'
import get from 'lodash/get'
import { ABSOLUTE_HOST_PATH } from 'constants/common'
import { compose, graphql } from 'react-apollo'
import Post from './post/Post'
import Layout from '../components/Layout'
import withData from '../apollo/hoc/withData'

class PostPage extends React.Component {
  static async getInitialProps(context) {
    return { verboseId: get(context.query, 'id') }
  }

  getMeta = () => {
    const { verboseId, title, description, previewPic, author } = this.props.post
    return {
      title,
      description,
      image: `${ABSOLUTE_HOST_PATH}${previewPic}`,
      url: `${ABSOLUTE_HOST_PATH}/post/${verboseId}`,
      author: author.name,
    }
  }

  render() {
    const { post } = this.props
    return get(this.props, 'post') ? (
      <Layout as="article" title={post.title} meta={this.getMeta()}>
        <Post post={post} />
      </Layout>
    ) : null
  }
}

export default compose(withData, graphql(GetPostByVerboseId, nameToProp('post', 'Post')))(
  PostPage,
)
