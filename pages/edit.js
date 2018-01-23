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

    if (!user) {
      redirect(context, '/')
    }

    return { postVerboseId: get(context.query, 'id'), author: get(user, 'author') }
  }

  render() {
    const { post, ...props } = this.props
    return <Edit post={post} {...props} />
  }
}

export default compose(
  withData,
  graphql(
    gql`
      query($postVerboseId: String!) {
        Post(postVerboseId: $postVerboseId) {
          id
          title
          createdDate
          body
          description
          previewPic
          postVerboseId
          published
          url
          tags {
            id
            name
          }
          author {
            id
            name
          }
        }
      }
    `,
    {
      name: 'getPost',
      skip: ownProps => !ownProps.postVerboseId,
      props: ({ getPost: { Post: post } }) => ({ post }),
    },
  ),
)(EditPage)
