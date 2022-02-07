const initialState = {
  user: null,
};

export const Action = {
  Types: {
    SET_USER: 'SET_USER',
  },

  Creators: {
    setUser: (payload) => ({
      type: Action.Types.SET_USER,
      payload,
    }),
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  default: return state;
  case Action.Types.SET_USER: {
    return {
      ...state,
      user: action.payload,
    };
  }
  }
};

export default reducer;
