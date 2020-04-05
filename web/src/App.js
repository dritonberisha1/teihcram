import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import '@fortawesome/fontawesome-free/css/all.css';

import LandingPage from './pages/landing-page';
import OrderPage from './pages/order-page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/landing'>
          <LandingPage />
        </Route>
        <Route path='/'>
          <OrderPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
