function reducer(state, action) {
  switch (action.type) {
    case 'input':
      return {
        ...state,
        input: action.payload,
      }
    case 'data':
      return {
        ...state,
        data: action.payload,
      }
    case 'add':
      return {
        ...state,
        outputs: [ ...state.outputs, action.payload ],
      }
    case 'remove':
      return {
        ...state,
        outputs: [...state.outputs.filter(item => item !== action.payload)],
      }
    default:
      throw new Error()
  }
}

export default reducer
