/**
 * scroll-button.component
 */
import React from 'react';
import './scroll-button.component.scss';

export default ({
  className = '',
  label = '',
  onClick = null,
}) => {
  return (
    <a
      className={`scroll-button ${className}`}
      onClick={onClick}
    >
      <span className="scroll-button__text display-18">{label}</span>
      <span className="scroll-button__line" />
    </a>
  );
};
