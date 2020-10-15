import React from 'react';

import './styles.scss';

const Button = ({ children, isGoogleSingIn, ...otherProps }) => (
  <button
    className={`${isGoogleSingIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;