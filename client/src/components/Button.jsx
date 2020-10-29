import React from 'react';

import { ButtonContainer } from '../styles/components/Button';

const Button = ({ children, ...props }) => (
  <ButtonContainer {...props}>
    {children}
  </ButtonContainer>
);

export default Button;