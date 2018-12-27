/**
 * hr.component
 */
import React from 'react';
import './hr.component.scss';

export default ({
  short,
}) => {
  return (
    <hr className={`hr ${short ? 'hr--short' : ''}`} />
  );
};
