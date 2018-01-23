import React from 'react'
//import { ABSOLUTE_HOST_PATH } from 'constants/common'
import get from 'lodash/get'
import { compose, graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Post from '../features/Post/Post'
import Layout from '../components/Layout'
import withData from '../apollo/withData'

class PostPage extends React.Component {
  static async getInitialProps(context) {
    return { postVerboseId: get(context.query, 'id') }
  }

  // getMeta = () => {
  //   const { postVerboseId, title, description, previewPic, author } = this.props.data.Post
  //   return {
  //     title,
  //     description,
  //     image: `${ABSOLUTE_HOST_PATH}${previewPic}`,
  //     url: `${ABSOLUTE_HOST_PATH}/post/${postVerboseId}`,
  //     author: author.name,
  //   }
  // }

  render() {
    const { Post: post = {} } = this.props.data
    return (
      <Layout as="article" title={post.title || 'Loading...'}>
        {!get(this, 'props.data.loading') && <Post post={post} />}
      </Layout>
    )
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
