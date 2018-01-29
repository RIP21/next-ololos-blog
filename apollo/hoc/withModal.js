import { ShowModal } from 'apollo/local/modal'
import { graphql } from 'react-apollo'

const withModal = graphql(ShowModal, {
  name: 'showMessage',
  props: ({ showMessage }) => ({
    onMessageShow: ({ message, type }) => showMessage({ variables: { message, type } }),
  }),
})

export default withModal
