import { connect } from 'react-redux';
import { action as toggleMenu, decorator as connectMenu } from 'redux-burger-menu';

export const initialState = {
  isOpen: false,
};

const openMenu = () => toggleMenu(true);
const closeMenu = () => toggleMenu(false);

export const withMenuProps = connectMenu;

export const withMenuActions = (Composed) => connect(
  null,
  { closeMenu, openMenu, toggleMenu },
)(Composed);

export const withMenu = (Composed) => withMenuActions(withMenuProps(Composed));
