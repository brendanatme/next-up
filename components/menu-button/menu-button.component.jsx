/**
 * menu-button.component
 */
import React from 'react';
import './menu-button.component.scss';

export default ({
  className = '',
  onClick,
  isOpen,
}) => {
  return (
    <button
      className={`menu-button ${isOpen ? 'menu-button--is-active' : ''} ${className}`}
      onClick={onClick}
      type="button"
    >
      <span className="menu-button__box">
        <span className="menu-button__line menu-button__line--1" />
        <span className="menu-button__line menu-button__line--2" />
        <span className="menu-button__line menu-button__line--3" />
      </span>
    </button>
  );
};
