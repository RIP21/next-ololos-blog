import gql from 'graphql-tag'

export const initialState = {
  modal: {
    __typename: 'Modal',
    message: '',
  },
}

export const ShowModal = gql`
  mutation ShowToast($message: String) {
    showModal(message: $message) @client
  }
`

export const GetModal = gql`
  query GetModal {
    modal @client {
      message
    }
  }
`

const showModal = (_, { message }, { cache }) => {
  const query = GetModal
  const data = {
    modal: {
      message,
    },
  }
  cache.writeQuery({ query, data })
}

const handlers = {
  Mutation: {
    showModal,
  },
}

export default handlers
