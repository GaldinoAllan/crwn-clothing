import React from 'react';

import '../sass/components/Button.scss';

const Button = ({ children, isGoogleSingIn, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? 'inverted' : ''
      } ${isGoogleSingIn ? 'google-sign-in' : ''
      } custom-button
    `}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;