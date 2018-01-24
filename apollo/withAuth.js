import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import get from 'lodash/get'

export const GetCurrentUserQuery = gql`
  query GetCurrentUserQuery {
    user {
      id
      author {
        id
        name
      }
    }
  }
`

const withAuth = graphql(GetCurrentUserQuery, {
  name: 'getCurrentUser',
  props: ({ getCurrentUser }) => ({
    isAuthenticated: !!get(getCurrentUser, 'user.id'),
  }),
})

export default withAuth
