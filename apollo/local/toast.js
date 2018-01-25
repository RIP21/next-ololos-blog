import gql from 'graphql-tag'

const ToastQuery = gql`
  query GetToast {
    toast {
      success
      error
    }
  }
`

const ShowToastError = gql`
  mutation ShowToastError($error: String!) {
    showToastError(error: $error) @client
  }
`

const ShowToastSuccess = gql`
  mutation ShowToastSuccess($success: String!) {
    showToastSuccess(success: $success) @client
  }
`
