import gql from 'graphql-tag'

const GetPostByVerboseId = gql`
  query GetPostByVerboseId($verboseId: String!) {
    Post(verboseId: $verboseId) {
      id
      title
      createdDate
      body
      description
      previewPic
      verboseId
      published
      language
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
`

export default GetPostByVerboseId
