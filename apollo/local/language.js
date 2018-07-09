import gql from 'graphql-tag'

export const ChangeLanguage = gql`
  mutation ChangeLanguage($language: String) {
    changeLanguage(language: $language) @client
  }
`

export const GetLanguage = gql`
  query GetLanguage {
    language @client
  }
`

const changeLanguage = (_, { language }, { cache }) => {
  const data = cache.readQuery({ query: GetLanguage })
  cache.writeQuery({ query: GetLanguage, data: { ...data, language } })
  return language
}

const handlers = {
  Mutation: {
    changeLanguage,
  },
}

export default handlers
