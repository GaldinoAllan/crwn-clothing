import React from 'react';

import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

import '../styles/pages/SignInSignUp.scss';

const SignInSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUp;