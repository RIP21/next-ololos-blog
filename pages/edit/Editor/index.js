import GetAllTags from 'apollo/graphcool/queries/GetAllTags'
import { nameToProp } from 'apollo/index'
import { AdminPostsQuery } from 'pages/admin'
import React from 'react'
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

export default compose(
  graphql(GetAllTags, nameToProp('tags', 'allTags')),
  graphql(
    gql`
      mutation($create: CreatePost!, $update: UpdatePost!) {
        updateOrCreatePost(create: $create, update: $update) {
          ...PostEditFields
        }
      }
      ${PostEditFieldsFragment}
    `,
    {
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
        refetchQueries: ['GetPostToRead', 'LandingPosts'],
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
    },
  ),
)(Editor)
