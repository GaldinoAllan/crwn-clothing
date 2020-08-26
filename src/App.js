import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage';

import './App.css';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/shop/hats' exact component={HatsPage} />
    </Switch>
  );
}

export default App;
