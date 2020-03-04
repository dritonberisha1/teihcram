import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import FrontPage from './pages/front-page';
import LoginPage from './pages/admin/login-page';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <FrontPage />
        </Route>
        <Route path='/login'>
          <LoginPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
