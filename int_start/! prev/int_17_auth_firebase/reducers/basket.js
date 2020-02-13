const initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_PHONE_TO_BASKET':
      return [...state, payload]

    case 'REMOVE_PHONE_FROM_BASKET':
      const newValues = state.filter(basketId => basketId !== payload)
      return newValues

    case 'CLEAN_BASKET':
      return initialState

    case 'CHECKOUT_BASKET':
      alert(JSON.stringify(payload))
      return state

    default:
      return state
  }
}