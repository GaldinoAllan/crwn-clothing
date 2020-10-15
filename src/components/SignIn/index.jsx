import React from 'react';

import FormInput from '../../components/FormInput';
import Button from '../../components/Button';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ email: '', password: '' });
  }

  handleChange = e => {
    const { value, name } = e.target;

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
            <Button onClick={signInWithGoogle} isGoogleSingIn>
              Sign in with Google
          </Button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;