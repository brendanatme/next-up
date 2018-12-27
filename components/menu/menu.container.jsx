/**
 * menu.container
 */
import React from 'react';
import MenuComponent from './menu.component';

export default class Menu extends React.Component {
  render() {
    return (
      <MenuComponent {...this.props} />
    );
  }
}
