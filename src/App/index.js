import React, { useEffect } from 'react'

import useStore from '../useStore'
import Input from '../Input'
import Add from '../Add'
import Outputs from '../Outputs'

function App() {
  const { state, dispatch } = useStore()

  function handleData(data) {
    dispatch({ type: 'data', payload: data })
  }

  useEffect(() => {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(res => res.json())
      .then(handleData)
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <Input />
      <Add />
      <Outputs />
    </div>
  )
}

export default App