import React, { createContext, useReducer, useContext } from 'react'

import reducer from './reducer'

const initialState = {
  data: null,
  input: 1,
  outputs: [],
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
