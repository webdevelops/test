const initialState = {}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'FETCH_CATEGORIES_SUCCESS':
      const newValues = {}
      payload.forEach(category => newValues[category.id] = category)
      return newValues

    default:
      return state
  }
}