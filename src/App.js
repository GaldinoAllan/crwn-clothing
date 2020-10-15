import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import ShopPage from './pages/ShopPage';
import SignInSignUp from './pages/SignInSignUp';
import Header from './components/Header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
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
