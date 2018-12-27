import { connect } from 'react-redux';
import { easeOut } from '../helpers/ease-out';

/**
 * store/screen
 * 
 * redux-related goodies for setting and getting screen info
 * such as:
 * 
 * - screen width
 * - screen height
 * - scroll position
 * 
 * do this here so we can get the information once, in a performant manner
 */

/**
 * allow our screen component to set the screen ref
 * and trigger actions on it here
 * so we can provide easy access
 * to other components
 */
let _screenRef;

/**
 * static data:
 * inital state and action types
 */
export const initialState = {
  scrollPos: 0,
  screenHeight: 0,
  screenWidth: 0,
};

export const actionTypes = {
  SET_VALS: 'screen::SET_VALS',
  SCROLL_TO: 'screen::SCROLL_TO',
};

export const setScreenRef = (screenRef) => {
  _screenRef = screenRef;
};

export const scrollTo = (payload) => (dispatch) => {
  // (imperatively) scroll to a point within our #screen container
  easeOut(_screenRef.scrollTop, payload, (value) => {
    _screenRef.scrollTop = value;
  });

  return dispatch({
    type: actionTypes.SCROLL_TO,
    payload,
  });
};

/**
 * setScreenVals
 * 
 * set as object using key/value pairs
 * 
 * @param {any} payload 
 */
export const setScreenVals = (payload) => (dispatch) => dispatch({
  payload,
  type: actionTypes.SET_VALS,
});

/**
 * withScreenProps
 * (hoc)
 * 
 * expose screen props to provided component (Composed)
 * 
 * @param {React.ComponentType} Composed
 */
export const withScreenProps = (Composed) => connect(({ screen }) => ({
  ...screen,
}))(Composed);

/**
 * withScreenActions
 * (hoc)
 * 
 * expose screen actions to provided component (Composed)
 * 
 * @param {React.ComponentType} Composed
 */
export const withScreenActions = (Composed) => connect(
  null,
  {
    setScreenVals,
    scrollTo,
  },
)(Composed);

export const withScreen = (Composed) => withScreenProps(withScreenActions(Composed));

/**
 * reducer 
 * 
 * @param {screenState} state 
 * @param {<{ type, payload }>} action 
 */
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_VALS: {
      return {
        ...state,
        ...action.payload
      };
    }
    case actionTypes.SCROLL_TO: {
      return state;
    }
    default: {
      return state;
    }
  }
};
