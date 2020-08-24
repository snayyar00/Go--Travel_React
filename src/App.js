import React from 'react';

import './App.css';
import Home from './components/pages/Home';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
