import React from 'react';
import { connect } from 'react-redux';

import FormInput from './FormInput';
import Button from './Button';

import { auth } from '../firebase/firebase.utils';
import { googleSignInStart } from '../redux/user/user.actions';

import { SignInContainer, ButtonsContainer } from '../styles/components/SignIn';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }

  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value })
  }

  render() {
    const { googleSignInStart } = this.props;

    return (
      <SignInContainer>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>

          <FormInput
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <ButtonsContainer>
            <Button>Sign In</Button>
            <Button
              type="button"
              onClick={googleSignInStart}
              isGoogleSingIn
            >
              Sign in with Google
          </Button>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  };
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);