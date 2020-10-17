import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Homepage from './pages/Homepage';
import ShopPage from './pages/ShopPage';
import SignInSignUp from './pages/SignInSignUp';
import Header from './components/Header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/actions/user.action';

import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/shop' exact component={ShopPage} />
          <Route path='/signin' exact component={SignInSignUp} />
        </Switch>
      </>
    );
  };
};

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
