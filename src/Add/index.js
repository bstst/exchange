import React, { useRef } from 'react'
import useStore from '../useStore'

function Add() {
  const select = useRef()
  const { state, dispatch } = useStore()
  const { data, outputs } = state

  if (!data) {
    return null
  }

  function handleAddClick() {
    dispatch({ type: 'add', payload: select.current.value })
  }

  const { bpi } = data
  const options = Object
    .keys(bpi)
    .map(key => bpi[key])
    .filter(option => !outputs.includes(option.code))
    .map(({ code }) => (
      <option key={code} value={code}>{code}</option>
    ))

  if (options.length === 0) {
    return null
  }

  return (
    <>
      <button
        onClick={handleAddClick}
      >
        Add
      </button>
      <select ref={select}>{options}</select>
    </>
  )
}

export default Add
