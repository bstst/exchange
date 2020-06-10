import React from 'react'
import useStore from '../useStore'

function Outputs() {
  const { state } = useStore()
  return state.outputs
    .map(code => {
      const input = parseFloat(state.input)
      const { rate_float, symbol } = state.data.bpi[code]
      const value = input * rate_float
      return (
        <div>
          <input
            value={`${symbol} ${value}`}
            readOnly={true}
          />
        </div>
      )
    })
}

export default Outputs
