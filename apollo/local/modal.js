import gql from 'graphql-tag'

// Default props of modal
export const modal = {
  __typename: 'Modal',
  message: '',
  isOpen: false,
  type: '',
}

export const ShowModal = gql`
  mutation ShowModal($message: String, $type: String!) {
    showMessage(message: $message, type: $type) @client {
      message
      isOpen
      type
    }
  }
`

export const CloseModal = gql`
  mutation CloseModal {
    closeModal @client {
      message
      isOpen
      type
    }
  }
`

export const GetModal = gql`
  query GetModal {
    modal @client {
      message
      isOpen
      type
    }
  }
`

const showMessage = (_, { message, type }, { cache }) => {
  const data = {
    modal: {
      ...modal,
      message,
      isOpen: true,
      type,
    },
  }
  cache.writeData({ data })
  return null
}

const closeModal = (_, __, { cache }) => {
  // Resets the modal with default props
  cache.writeData({ data: { modal } })
  return null
}

const handlers = {
  Mutation: {
    showMessage,
    closeModal,
  },
}

export default handlers
