import { nameToProp } from 'apollo'
import React from 'react'
import get from 'lodash/get'
import { ABSOLUTE_HOST_PATH } from 'constants/common'
import { compose, graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Post from '../features/Post/Post'
import Layout from '../components/Layout'
import withData from '../apollo/withData'

class PostPage extends React.Component {
  static async getInitialProps(context) {
    return { postVerboseId: get(context.query, 'id') }
  }

  getMeta = () => {
    const { postVerboseId, title, description, previewPic, author } = this.props.post
    return {
      title,
      description,
      image: `${ABSOLUTE_HOST_PATH}${previewPic}`,
      url: `${ABSOLUTE_HOST_PATH}/post/${postVerboseId}`,
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

const GetPostToReadQuery = gql`
  query GetPostToRead($postVerboseId: String!) {
    Post(postVerboseId: $postVerboseId) {
      title
      createdDate
      body
      description
      postVerboseId
      tags {
        name
      }
      author {
        name
      }
    }
  }
`

export default compose(withData, graphql(GetPostToReadQuery, nameToProp('post', 'Post')))(
  PostPage,
)
