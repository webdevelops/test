const initialState = []

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'ADD_PHONE_TO_BASKET':
      return [...state, payload]

    case 'REMOVE_PHONE_FROM_BASKET':
      const newValues = state.filter(basketId => basketId !== payload)
      return newValues

    case 'CLEAR_BASKET':
      return initialState

    default:
      return state
  }
}