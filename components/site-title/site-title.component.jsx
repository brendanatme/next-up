/**
 * site-title.component
 * 
 * used in header and menu
 */
import React from 'react';
import data from '../../data/index.json';
import './site-title.component.scss';

export default ({
  className = '',
  large,
  onClick = null,
}) => {
  return (
    <span
      className={`site-title ${large ? 'site-title--large' : ''} ib rel ${className}`}
      onClick={onClick}
    >
      <h2 className="inline site-title__text black">{data.siteTitle}</h2>
      <img
        className="site-title__leaf"
        src="/static/images/maple_leaf.svg"
        height="10"
        width="10"
      />
    </span>
  );
};
