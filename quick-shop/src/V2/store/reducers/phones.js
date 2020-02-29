
const initialState = [];

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'FETCH_PHONES_SUCCESS':
      return payload;

    case 'LOAD_MORE_PHONES_SUCCESS':
      return [...state, ...payload];

    default:
      return state;
  }
};