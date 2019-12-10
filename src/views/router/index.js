import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as routes from "../Constants/appRoutes";
import MenuBar from '../Menu';
import Login from '../login/login';

const AppRoutes = () => (
  <div className="app-routes">
    <Switch>
      <Route path={routes.LOGIN} component={Login} />
      <Route path={routes.MENUBAR} component={MenuBar} />
    </Switch>
  </div>
);

export default AppRoutes;
