import React from 'react'
import Admin from 'features/Admin'
import { withData, redirect, checkLoggedIn } from 'apollo'
import gql from 'graphql-tag'
import { compose, graphql } from 'react-apollo'

class AdminPage extends React.Component {
  static async getInitialProps(context, apolloClient) {
    const user = await checkLoggedIn(context, apolloClient)

    if (!user) {
      redirect(context, '/')
    }

    return {}
  }

  render() {
    const { data: { allPosts: posts }, ...rest } = this.props
    return <Admin posts={posts} {...rest} />
  }
}

export default compose(
  withData,
  graphql(gql`
    {
      allPosts(orderBy: createdDate_DESC) {
        title
        createdDate
        postVerboseId
        published
        tags {
          name
        }
        author {
          name
        }
      }
    }
  `),
)(AdminPage)
