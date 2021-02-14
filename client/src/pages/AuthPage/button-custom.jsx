import React from 'react';

import './button-custom.scss';

const ButtonCustom = ({ children, inverted, ...props }) => (
  <button
    className={`${inverted ? 'inverted' : null} custom-button`}
    {...props}
  >
    {children}
  </button>
);

export default ButtonCustom;
