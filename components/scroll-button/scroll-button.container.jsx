/**
 * scroll-button.container
 */
import React from 'react';
import ScrollButtonComponent from './scroll-button.component';

export default class ScrollButton extends React.Component {
  render() {
    return (
      <ScrollButtonComponent {...this.props} />
    );
  }
}
