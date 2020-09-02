import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import ShopPage from './pages/ShopPage';

import './App.css';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Homepage} />
      <Route path='/shop' exact component={ShopPage} />
    </Switch>
  );
}

export default App;
