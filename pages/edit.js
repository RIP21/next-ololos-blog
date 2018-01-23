import checkLoggedIn from 'apollo/checkLoggedIn'
import redirect from 'apollo/redirect'
import React from 'react'
import Edit from 'features/Edit'
import get from 'lodash/get'
import withData from 'apollo/withData'
import { compose, graphql } from 'react-apollo'
import gql from 'graphql-tag'

class EditPage extends React.Component {
  static async getInitialProps(context, apolloClient) {
    const user = await checkLoggedIn(context, apolloClient)

    if (!user.id) {
      redirect(context, '/')
    }

    return { postVerboseId: get(context.query, 'id') }
  }

  render() {
    const { data: { Post: post }, ...props } = this.props
    return <Edit postId={post.postVerboseId} post={post} {...props} />
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
)(EditPage)
