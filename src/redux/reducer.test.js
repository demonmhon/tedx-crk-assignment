import appReducer from './reducers/app';
import ACTIONS from './actions/types';

describe('app reducer', () => {
  it('should return the initial state', () => {
    expect(appReducer(undefined, {})).toEqual({ isLoading: false });
  });

  it('should handle SET_LOADING', () => {
    expect(
      appReducer(
        {},
        {
          type: ACTIONS.SET_LOADING,
          payload: true,
        }
      )
    ).toEqual({
      isLoading: true,
    });
  });
});
