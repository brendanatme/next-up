/**
 * bg.component
 */
import React from 'react';
import './bg.component.scss';

export default ({ className, imgUrl }) => (
  <div
    className={`bg ${className}`}
    style={{ backgroundImage: imgUrl ? `url('${imgUrl}')` : 'none' }}
  ></div>
);
