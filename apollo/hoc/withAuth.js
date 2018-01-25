import GetCurrentUser from 'apollo/graphcool/queries/GetCurrentUser'
import { graphql } from 'react-apollo'
import get from 'lodash/get'

const withAuth = graphql(GetCurrentUser, {
  name: 'getCurrentUser',
  props: ({ getCurrentUser }) => ({
    isAuthenticated: !!get(getCurrentUser, 'user.id'),
  }),
})

export default withAuth
