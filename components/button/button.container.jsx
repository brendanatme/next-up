/**
 * button.container
 */
import React from 'react';
import ButtonComponent from './button.component';

export default class Button extends React.Component {
  render() {
    return (
      <ButtonComponent {...this.props} />
    );
  }
}
