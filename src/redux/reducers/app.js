import ACTIONS from '../actions/types';

const initialState = {
  isLoading: false,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SET_LOADING: {
      const newState = {
        ...state,
        isLoading: action.payload,
      };
      return newState;
    }

    default: {
      return state;
    }
  }
}
