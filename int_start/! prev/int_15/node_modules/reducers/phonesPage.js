const initialState = {
  ids: [],
  search: ''
}

export default (state = initialState, { type, payload }) => {
  let ids = []
  switch (type) {
    case 'FETCH_PHONES_SUCCESS':
      const newValues = payload.map(phone => phone.id)
      ids = [...state.ids, ...newValues]
      return { ...state, ids }

    case 'LOAD_MORE_PHONES_SUCCESS':
      const moreValues = payload.map(phone => phone.id)
      ids = [...state.ids, ...moreValues]
      return { ...state, ids }

    case 'SEARCH_PHONE':
      return { ...state, search: payload }

    default:
      return state
  }
}