
const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_PHONES_SUCCESS':
      return payload;

    case 'LOAD_MORE_PHONES_SUCCESS':
      return [...state, ...payload];

    case 'FETCH_PHONE_BY_ID_SUCCESS':
      const newValue = state.find(phone => phone.id !== payload.id);
      if (newValue) {
        return [...state, newValue];
      }
      return [payload];

    default:
      return state;
  }
};