/**
 * logo.component
 */
import React from 'react';
import './logo.component.scss';

export default ({
  className,
  hideText,
  large,
}) => (
  <a
    className={`logo ${large ? 'logo--large' : ''} ${className}`}
    href="https://www.thercu.org"
    target="_blank"
  >
    <img
      alt="The RCU Logo"
      className="ib logo__img"
      height={large ? '70' : '50'}
      src="/static/images/rcu_logo.svg"
      width={large ? '70' : '50'}
    />
    {!hideText && (
      <img
        alt="Responsible Cannabis Use"
        className="logo__text"
        height={large ? '55' : '32'}
        src="/static/images/rcu_logo_text.svg"
      />
    )}
  </a>
);
