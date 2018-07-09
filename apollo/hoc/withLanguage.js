import { GetLanguage, ChangeLanguage } from 'apollo/local/language'
import { graphql, compose } from 'react-apollo'
import get from 'lodash/get'

const withLanguage = compose(
  graphql(ChangeLanguage, {
    name: 'changeLanguage',
    props: ({ changeLanguage }) => ({
      onLanguageChange: language => changeLanguage({ variables: { language } }),
    }),
  }),
  graphql(GetLanguage, {
    name: 'getLanguage',
    props: ({ getLanguage }) => ({
      language: get(getLanguage, 'language'),
    }),
  }),
)

export default withLanguage
