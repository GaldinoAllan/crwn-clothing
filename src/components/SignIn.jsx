import React from 'react';

import FormInput from './FormInput';
import Button from './Button';

import { auth, signInWithGoogle } from '../firebase/firebase.utils';

import '../sass/components/SignIn.scss';

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
    return (
      <div className="sign-in">
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
          <div className="buttons">
            <Button type="submit">Sign In</Button>
            <Button type="button" onClick={signInWithGoogle} isGoogleSingIn>
              Sign in with Google
          </Button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;