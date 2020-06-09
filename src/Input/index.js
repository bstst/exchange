import React from 'react'
import useStore from '../useStore'

function Input() {
  const [{ input }, dispatch] = useStore()

  function handleInputChange(e) {
    dispatch({ type: 'input', value: e.target.value })
  }

  return (
    <input
      type="number"
      value={input}
      onChange={handleInputChange}
      min={0}
    />
  )
}

export default Input
