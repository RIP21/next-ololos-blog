import { modal } from './local/modal'

const initialLocalState = overrides => ({
  modal,
  language: 'RU',
  ...overrides,
})

export default initialLocalState
