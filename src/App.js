import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/shop' exact component={ShopPage} />
      </Switch>
    </>
  );
}

export default App;
