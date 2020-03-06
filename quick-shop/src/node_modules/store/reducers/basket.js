const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_PHONE_TO_BASKET':
      return [...state, payload];

    case 'DELETE_PHONE_FROM_BASKET':
      return state.filter(id => id !== payload);

    case 'CLEAN_BASKET':
      return initialState;

    default:
      return state;
  }
};