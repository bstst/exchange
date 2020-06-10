import React from 'react'

import useStore from '../Store/useStore'
import decodeEntities from '../Utils/decodeEntities'
import formatCurrency from '../Utils/formatCurrency'
import isNumber from '../Utils/isNumber'

function Outputs() {
  const { state, dispatch } = useStore()
  return state.outputs
    .map(code => {
      const input = parseFloat(state.input)
      const { rate_float, symbol } = state.data.bpi[code]
      const value = isNumber(input) ? input * rate_float : ''

      function handleRemoveClick() {
        dispatch({ type: 'remove', payload: code })
      }

      return (
        <div>
          <input
            type="text"
            value={`${decodeEntities(symbol)} ${formatCurrency(value)}`}
            readOnly={true}
          />
          <button
            onClick={handleRemoveClick}
          >
            &times;
          </button>
        </div>
      )
    })
}

export default Outputs
