import React from 'react'
import useStore from '../useStore'

function Input() {
  const { state, dispatch } = useStore()

  function handleInputChange(e) {
    dispatch({ type: 'input', payload: e.target.value })
  }

  return (
    <input
      type="number"
      value={state.input}
      onChange={handleInputChange}
      min={0}
    />
  )
}

export default Input
