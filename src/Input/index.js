import React, { useState } from 'react'

function Input() {
  const [input, setInput] = useState(1)

  function handleInputChange(e) {
    setInput(e.target.value)
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
