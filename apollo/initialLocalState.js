import Cookie from 'js-cookie'
import { modal } from './local/modal'

const initialLocalState = overrides => ({
  modal,
  language: (process.browser && Cookie.get('ololoslanguage')) || 'RU',
  ...overrides,
})

export default initialLocalState
