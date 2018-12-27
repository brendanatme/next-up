/**
 * select.component
 */
import React from 'react';
import './select.component.scss';

export default ({
  children,
  className = '',
  onChange,
}) => {
  return (
    <div className={`select__wrapper ${className}`}>
      <select className="select" onChange={onChange}>
        {children}
      </select>
    </div>
  );
};
