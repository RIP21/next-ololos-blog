import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import get from 'lodash/get'

const withAuth = graphql(
  gql`
    query getUser {
      user {
        id
      }
    }
  `,
  {
    name: 'getCurrentUser',
    props: ({ getCurrentUser }) => ({
      isAuthenticated: !!get(getCurrentUser, 'user.id'),
    }),
  },
)

export default withAuth
