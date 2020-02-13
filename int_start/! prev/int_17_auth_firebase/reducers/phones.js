const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_PHONES_SUCCESS':
      const newValues = {}
      payload.forEach(phone => newValues[phone.id] = phone)
      return newValues

    case 'LOAD_MORE_PHONES_SUCCESS':
      const moreValues = {}
      payload.forEach(phone => moreValues[phone.id] = phone)
      return { ...state, ...moreValues }

    case 'FETCH_PHONE_BY_ID_SUCCESS':
      const newValue = {}
      newValue[payload.id] = payload
      return { ...state, ...newValue }
      // return newValue

    default:
      return state
  }
}