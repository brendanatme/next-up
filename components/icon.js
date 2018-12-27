/**
 * icon
 * 
 * maps to our icomoon icon font
 * 
 * and styles/global/icons
 */
import React from 'react';

export default ({
  className = '',
  name,
}) => {
  return (
    <span className={`${className}`}>
      <span className={`icon-${name}`} />
    </span>
  );
};
