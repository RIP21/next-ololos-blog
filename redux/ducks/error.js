const CLOSE_ERROR_MODAL = 'error/CLOSE_ERROR_MODAL'

const actionTypeEndsWithFail = type => type.substring(type.length - 5) === '_FAIL'

export default function reducer(state = { error: {}, show: false }, action = {}) {
  if (actionTypeEndsWithFail(action.type)) {
    return {
      error: action.error,
      show: true,
    }
  } else if (action.type === CLOSE_ERROR_MODAL) {
    return {
      error: {},
      show: false,
    }
  }
  return state
}

export function closeModal() {
  return dispatch => dispatch({ type: CLOSE_ERROR_MODAL })
}
