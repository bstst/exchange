import React, { createContext, useReducer, useContext } from 'react'

const initialState = {
  data: null,
  input: 1,
  outputs: [],
}

function reducer(state, action) {
  switch (action.type) {
    case 'input':
      return {
        ...state,
        input: action.payload,
      }
    case 'data':
      return {
        ...state,
        data: action.payload,
      }
    case 'add':
      return {
        ...state,
        outputs: [ ...state.outputs, action.payload ],
      }
    case 'remove':
      return {
        ...state,
        outputs: [...state.outputs.filter(item => item !== action.payload)],
      }
    default:
      throw new Error()
  }
}

function useLocalStore() {
  const [state, dispatch] = useReducer(reducer, initialState)
  window.state = state // debug helper
  return { state, dispatch }
}

const Context = createContext(initialState)

function Provider({ children }) {
  const { state, dispatch } = useLocalStore()
  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  )
}

function useStore() {
  const { state, dispatch } = useContext(Context)
  return { state, dispatch }
}

export { Provider }

export default useStore
