import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import ShopPage from './pages/ShopPage';
import SignInSignUp from './pages/SignInSignUp';
import Header from './components/Header';
import { auth } from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/shop' exact component={ShopPage} />
          <Route path='/signin' exact component={SignInSignUp} />
        </Switch>
      </>
    );
  }
}

export default App;
