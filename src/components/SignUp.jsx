import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from './FormInput';
import Button from './Button';

import { signUpStart } from '../redux/user/user.actions'

import { SignUpContainer } from '../styles/components/SignUp';

const SignUp = ({ signUpStart }) => {
  const [credentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = credentials;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Password and password confirmation do not match')
      return;
    };

    signUpStart({ displayName, email, password });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  }

  return (
    <SignUpContainer>
      <h2 className="title">
        I do not have an account yet
        </h2>
      <span>Sign up with email and password</span>

      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <Button type='submit'>
          Sign Up
          </Button>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials)),
});

export default connect(
  null,
  mapDispatchToProps,
)(SignUp);