import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { withClientState } from 'apollo-link-state'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import initialLocalState from 'apollo/initialLocalState'
import resolvers from 'apollo/local'
import fetch from 'isomorphic-unfetch'

let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

function create(initialState, { getToken }) {
  const httpLink = createHttpLink({
    uri: 'https://api.graph.cool/simple/v1/cjckqtb9k4a570187cy41x9at',
    credentials: 'same-origin',
  })

  const cache = new InMemoryCache().restore(initialState || {})

  const stateLink = withClientState({
    cache,
    defaults: initialLocalState,
    resolvers,
  })

  const authLink = setContext((_, { headers }) => {
    const token = getToken()
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : null,
      },
    }
  })

  const client = new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: ApolloLink.from([stateLink, authLink.concat(httpLink)]),
    cache,
  })

  // Needed so on reset store we have local-state set to defaults
  client.onResetStore(stateLink.writeDefaults)

  return client
}

export default function initApollo(initialState, options) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState, options)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, options)
  }

  return apolloClient
}
