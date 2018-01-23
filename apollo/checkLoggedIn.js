import gql from 'graphql-tag'

const checkLoggedIn = async (context, apolloClient) => {
  try {
    const { data } = await apolloClient.query({
      query: gql`
        query getUser {
          user {
            id
          }
        }
      `,
    })
    return data.user
  } catch (err) {
    return {}
  }
}

export default checkLoggedIn
