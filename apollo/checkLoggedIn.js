import gql from 'graphql-tag'

export default (context, apolloClient) =>
  apolloClient
    .query({
      query: gql`
        query getUser {
          user {
            id
          }
        }
      `,
    })
    .then(({ data }) => ({ loggedInUser: data }))
    .catch(() =>
      // Fail gracefully
      ({ loggedInUser: {} }),
    )
