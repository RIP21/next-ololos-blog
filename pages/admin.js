import React from 'react'
import Admin from 'features/Admin'
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
    return <Admin posts={posts} {...rest} />
  }
}

const AdminPostsQuery = gql`
  query AdminPosts {
    allPosts(orderBy: createdDate_DESC) {
      id
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
`

const DeletePost = gql`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`

export default compose(
  withData,
  graphql(DeletePost, {
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
