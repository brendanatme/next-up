/**
 * menu-button.container
 */
import React from 'react';
import { withMenu } from '../../store/burger-menu';
import MenuButtonComponent from './menu-button.component';

class MenuButton extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.toggleMenu(!this.props.isOpen);
  }

  render() {
    const {
      closeMenu,
      openMenu,
      toggleMenu,
      ...props
    } = this.props;

    return (
      <MenuButtonComponent
        {...props}
        onClick={this.handleClick}
      />
    );
  }
}

export default withMenu(MenuButton);
