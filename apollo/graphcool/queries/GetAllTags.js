import gql from 'graphql-tag'

const GetAllTags = gql`
  query GetAllTags {
    allTags {
      id
      name
    }
  }
`

export default GetAllTags
