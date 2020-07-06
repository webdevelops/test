const initialState = {
  loading: false
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'APP/SHOW_LOADER':
      return { ...state, loading: true };

    case 'APP/HIDE_LOADER':
      return { ...state, loading: false };

    default: return state;
  }
}