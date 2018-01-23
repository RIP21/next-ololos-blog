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
    const { postVerboseId, title, description, previewPic, author } = this.props.data.Post
    return {
      title,
      description,
      image: `${ABSOLUTE_HOST_PATH}${previewPic}`,
      url: `${ABSOLUTE_HOST_PATH}/post/${postVerboseId}`,
      author: author.name,
    }
  }

  render() {
    const { data: { Post: post = {} } = {} } = this.props
    return get(this.props, 'data.Post') ? (
      <Layout as="article" title={post.title || 'Loading...'} meta={this.getMeta()}>
        <Post post={post} />
      </Layout>
    ) : null
  }
}

export default compose(
  withData,
  graphql(
    gql`
      query($postVerboseId: String!) {
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
    `,
  ),
)(PostPage)
