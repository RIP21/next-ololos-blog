import gql from 'graphql-tag'

const DeletePostMutation = gql`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`

export default DeletePostMutation
