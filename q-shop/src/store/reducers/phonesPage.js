const initialState = {
  ids: [],
  value: "",
  loading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_PHONES_REQUEST':
      return { ...state, loading: true };

    case 'FETCH_PHONES_SUCCESS':
      const newValues = payload.map(phone => phone.id);
      return { 
        ...state, 
        ids: newValues, 
        loading: false 
      };

    case 'LOAD_MORE_PHONES_SUCCESS':
      const moreValues = payload.map(phone => phone.id);
      const ids = [...state.ids, ...moreValues];
      return { ...state, ids };

    case 'SEARCH_PHONE':
      return { ...state, value: payload };

    default:
      return state;
  }
};