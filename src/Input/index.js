import React from 'react'
import useStore from '../Store/useStore'

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
      step={0.1}
    />
  )
}

export default Input
