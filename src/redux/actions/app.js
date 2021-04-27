import ACTIONS from './types';

// eslint-disable-next-line no-unused-vars
export function init(params) {
  return async (dispatch, getState) => {
    dispatch({ type: ACTIONS.SET_LOADING, payload: true });
    dispatch({ type: ACTIONS.SET_LOADING, payload: false });
    return getState();
  };
}
