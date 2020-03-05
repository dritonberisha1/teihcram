import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import FrontPage from './pages/front-page';
import AdminPage from './pages/admin/admin-page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <FrontPage />
        </Route>
        <Route path='/admin'>
          <AdminPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
