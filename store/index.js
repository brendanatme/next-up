import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as burgerMenu } from 'redux-burger-menu';
import thunkMiddleware from 'redux-thunk';
import { initialState as initialBurgerMenuState } from './burger-menu';
import { initialState as initialScreenState, reducer as screen } from './screen';
import { initialState as initialDriverGroupState, reducer as driverGroups } from './driver-groups';

const defaultState = {
  burgerMenu: initialBurgerMenuState,
  driverGroups: initialDriverGroupState,
  screen: initialScreenState,
};

export const reducer = combineReducers({
  burgerMenu,
  driverGroups,
  screen,
});

export function initializeStore(initialState = defaultState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}
