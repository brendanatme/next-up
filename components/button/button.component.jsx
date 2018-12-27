/**
 * button.component
 */
import React from 'react';
import './button.component.scss';

export default ({
  arrow,
  className = '',
  dark,
  fullWidth,
  label,
  onClick = null,
}) => (
  <button
    className={`button ${className} ${dark ? 'button--dark' : ''} ${fullWidth ? 'button--full-width' : ''} ${arrow ? 'button--with-arrow' : ''}`}
    onClick={onClick}
    type="button"
  >
    <span className="button__label truncate">{label}</span>
    <span className="button__arrow" />
  </button>
);
