import React from 'react';

import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

import { Container } from '../styles/pages/SignInSignUp';

const SignInSignUp = () => (
  <Container>
    <SignIn />
    <SignUp />
  </Container>
);

export default SignInSignUp;