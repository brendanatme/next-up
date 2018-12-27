import { connect } from 'react-redux';

/**
 * store/driver-groups
 * 
 * redux-related goodies for selecting the driver group
 * 
 * do this here so we can get the information once, in a performant manner
 */

/**
 * static data:
 * inital state and action types
 */
export const initialState = {
  driverGroup: 'all-drivers',
};

export const actionTypes = {
  SET_DRIVER_GROUP: 'driverGroups::SET_DRIVER_GROUP',
};

/**
 * setDriverGroup
 * 
 * set the selected driver group
 * 
 * @param {string} payload 
 */
export const setDriverGroup = (payload) => (dispatch) => dispatch({
  payload,
  type: actionTypes.SET_DRIVER_GROUP,
});

/**
 * withDriverGroups
 * (hoc)
 * 
 * expose driverGroups props to provided component (Composed)
 * 
 * @param {React.ComponentType} Composed
 */
export const withDriverGroups = (Composed) => connect(({ driverGroups }) => ({
  ...driverGroups,
}))(Composed);

/**
 * withDriverGroupsActions
 * (hoc)
 * 
 * expose screen actions to provided component (Composed)
 * 
 * @param {React.ComponentType} Composed
 */
export const withDriverGroupsActions = (Composed) => connect(
  null,
  { setDriverGroup },
)(Composed);

export const withAllDriverGroups = (Composed) => withDriverGroupsActions(withDriverGroups(Composed));

/**
 * reducer 
 * 
 * @param {driverGroupState} state 
 * @param {<{ type, payload }>} action 
 */
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_DRIVER_GROUP: {
      return {
        ...state,
        driverGroup: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
