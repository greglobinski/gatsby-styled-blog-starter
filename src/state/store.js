import { createStore as reduxCreateStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

/*
 * action types
 */

const TOGGLE_INFO_SCREEN = "TOGGLE_INFO";

/*
 * action creators
 */
export function toggleInfoScreen() {
  return { type: TOGGLE_INFO_SCREEN };
}

/*
 * reducer
 */

const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_INFO_SCREEN:
      return Object.assign({}, state, {
        info: {
          isRolledDown: !state.info.isRolledDown
        }
      });
    default:
      return state;
  }
};

const initialState = {
  posts: [],
  info: {
    isRolledDown: false,
    inTransition: false
  },
  navigator: {
    isAside: false,
    inTransition: false
  }
};

const createStore = () =>
  reduxCreateStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  );
export default createStore;
