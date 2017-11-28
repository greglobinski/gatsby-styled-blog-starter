import { createStore as reduxCreateStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

/*
 * action types
 */

const TOGGLE_INFO_SCREEN = "TOGGLE_INFO";
const UPDATE_POSTS_DATA = "UPDATE_POSTS_DATA";
const NAVIGATOR_IS_ASIDE = "NAVIGATOR_IS_ASIDE";
const NAVIGATOR_IN_TRANSITION = "NAVIGATOR_IN_TRANSITION";

/*
 * action creators
 */
export function toggleInfoScreen() {
  return { type: TOGGLE_INFO_SCREEN };
}

export function updatePostsData(data) {
  return { type: UPDATE_POSTS_DATA, data };
}

export function navigatorIsAside(val) {
  return { type: NAVIGATOR_IS_ASIDE, val };
}

export function navigatorInTransition(val) {
  return { type: NAVIGATOR_IN_TRANSITION, val };
}

/*
 * reducer
 */

const reducer = (state, action) => {
  switch (action.type) {
    case NAVIGATOR_IS_ASIDE:
      return Object.assign({}, state, {
        navigator: {
          isAside: action.val,
          inTransition: true
        }
      });
    case NAVIGATOR_IN_TRANSITION:
      return Object.assign({}, state, {
        navigator: {
          isAside: state.navigator.isAside,
          inTransition: action.val
        }
      });
    case UPDATE_POSTS_DATA:
      return Object.assign({}, state, {
        posts: action.data
      });
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
