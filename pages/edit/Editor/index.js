import GetAllTags from 'apollo/graphcool/queries/GetAllTags'
import withModal from 'apollo/hoc/withModal'
import { nameToProp } from 'apollo/index'
import { AdminPostsQuery } from 'pages/admin'
import map from 'lodash/map'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import Editor from './Editor'

const PostEditFieldsFragment = gql`
  fragment PostEditFields on Post {
    id
    body
    createdDate
    verboseId
    previewPic
    title
    updatedDate
    published
    description
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
`

const UpdateOrCreatePost = gql`
  mutation($create: CreatePost!, $update: UpdatePost!) {
    updateOrCreatePost(create: $create, update: $update) {
      ...PostEditFields
    }
  }
  ${PostEditFieldsFragment}
`

export default compose(
  graphql(GetAllTags, nameToProp('tags', 'allTags')),
  graphql(UpdateOrCreatePost, {
    name: 'updateOrCreatePost',
    props: ({ updateOrCreatePost }) => ({
      onCreateOrUpdatePost: ({ id = '', __typename, ...post }) => {
        /* eslint-disable no-param-reassign */
        post.tagsIds = map(post.tags, tag => tag.id).filter(Boolean)
        delete post.author && delete post.tags
        const create = { ...post }
        const update = { id, ...post }
        /* eslint-enable no-param-reassign */
        return updateOrCreatePost({
          variables: { create, update },
        })
      },
    }),
    options: {
      // Tells Apollo to refetch these queries in case of request of them by some subscribed component after this mutation
      refetchQueries: ['GetPostToRead', 'LandingPosts'],
      // Update function to update Admin page posts query without refetch
      update: (proxy, { data: { updateOrCreatePost } }) => {
        const { allPosts } = proxy.readQuery({ query: AdminPostsQuery })
        const index = allPosts.findIndex(
          adminPost => adminPost.verboseId === updateOrCreatePost.verboseId,
        )
        if (index >= 0) {
          allPosts[index] = updateOrCreatePost
        } else {
          allPosts.unshift(updateOrCreatePost)
        }
        proxy.writeQuery({ query: AdminPostsQuery, data: { allPosts } })
      },
    },
  }),
  withModal,
)(Editor)
