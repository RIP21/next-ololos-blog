import GetCurrentUser from 'apollo/graphcool/queries/GetCurrentUser'

const checkLoggedIn = async (context, apolloClient) => {
  try {
    const { data } = await apolloClient.query({
      query: GetCurrentUser,
    })
    return data.user
  } catch (err) {
    return {}
  }
}

export default checkLoggedIn
