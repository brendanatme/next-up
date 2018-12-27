/**
 * box-link.component
 */
import React from 'react';
import './box-link.component.scss';

export default ({
  label,
  url,
}) => (
  <a
    className="box-link left perspective"
    href={url}
    target="_blank"
  >
    <div className="square">
      <div className="fill vcenter has-text-centered">
        <div className="box-link__label copy-13 white strong">{label}</div>
      </div>
    </div>
  </a>
);
