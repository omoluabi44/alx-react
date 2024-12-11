import rootReducer from './rootReducer';
import { Map } from 'immutable';

describe('rootReducer', () => {
  it('should return the initial state', () => {
    const initialState = rootReducer(undefined, {}); // Dispatch an empty action to get the initial state

    // Check that the initial state matches the expected structure
    expect(initialState).toEqual({
      courses: Map(), // Initially, courses is an empty Map
      notifications: Map(), // Initially, notifications is an empty Map
      ui: Map({ // ui state is a Map with the default values
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: Map()
      })
    });
  });
});
