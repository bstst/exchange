import React from 'react'

import useStore from '../useStore'
import decodeEntities from '../Utils/decodeEntities'

function Outputs() {
  const { state, dispatch } = useStore()
  return state.outputs
    .map(code => {
      const input = parseFloat(state.input)
      const { rate_float, symbol } = state.data.bpi[code]
      const isNumber = Number.isFinite(parseFloat(input))
      const value = isNumber ? input * rate_float : ''

      function handleRemoveClick() {
        dispatch({ type: 'remove', payload: code })
      }

      return (
        <div>
          <input
            value={`${decodeEntities(symbol)} ${value}`}
            readOnly={true}
          />
          <button
            onClick={handleRemoveClick}
          >
            Remove
          </button>
        </div>
      )
    })
}

export default Outputs
