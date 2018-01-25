import gql from 'graphql-tag'

const GetCurrentUser = gql`
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

export default GetCurrentUser
