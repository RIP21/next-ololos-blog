import merge from 'lodash/merge'
import modal from './modal'
import language from './language'

const resolvers = merge(modal, language)

export default resolvers
