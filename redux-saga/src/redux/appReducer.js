const initialState = {
  loading: false,
  alert: false
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'APP/SHOW_LOADER':
      return { ...state, loading: true };

    case 'APP/HIDE_LOADER':
      return { ...state, loading: false };

    case 'APP/SHOW_ALERT':
      return {...state, alert: true};

    default: return state;
  }
}