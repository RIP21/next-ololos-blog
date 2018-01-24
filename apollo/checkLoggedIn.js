import { GetCurrentUserQuery } from 'apollo/withAuth'

const checkLoggedIn = async (context, apolloClient) => {
  try {
    const { data } = await apolloClient.query({
      query: GetCurrentUserQuery,
    })
    return data.user
  } catch (err) {
    return {}
  }
}

export default checkLoggedIn
