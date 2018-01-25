import DeletePostMutation from 'apollo/graphcool/mutations/DeletePostById'
import React from 'react'
import Administration from 'pages/admin/Administration'
import { withData, redirect, checkLoggedIn, nameToProp } from 'apollo'
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
    const { posts, ...rest } = this.props
    return <Administration posts={posts} {...rest} />
  }
}

export const AdminPostsQuery = gql`
  query AdminPosts {
    allPosts(orderBy: createdDate_DESC) {
      id
      title
      createdDate
      verboseId
      published
      tags {
        name
      }
      author {
        name
      }
    }
  }
`

export default compose(
  withData,
  graphql(DeletePostMutation, {
    name: 'onPostDelete',
    props: ({ onPostDelete }) => ({
      onPostDelete: id => onPostDelete({ variables: { id } }),
    }),
    options: {
      update: (proxy, { data: { deletePost } }) => {
        const adminPosts = proxy.readQuery({ query: AdminPostsQuery })
        adminPosts.allPosts = adminPosts.allPosts.filter(
          post => post.id !== deletePost.id,
        )
        proxy.writeQuery({ query: AdminPostsQuery, data: adminPosts })
      },
    },
  }),
  graphql(AdminPostsQuery, nameToProp('posts', 'allPosts')),
)(AdminPage)
