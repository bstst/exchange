import { useReducer } from 'react'

const initialState = {
  input: 1,
}

function reducer(state, action) {
  switch (action.type) {
    case 'input':
      return {
        ...state,
        input: action.value,
      }
    default:
      throw new Error()
  }
}

function useStore() {
  const [state, dispatch] = useReducer(reducer, initialState)
  window.state = state // debug helper
  return [state, dispatch]
}

export default useStore
