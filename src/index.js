import React from 'react';
import ReactDOM from 'react-dom';
import { start } from 'single-spa';
import { registerApplications } from './utils/applications';
import { CoreApplication } from './Components/Application';
import './index.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Switch>
        <Redirect from="/" to="/user-portal" exact />
        <Route component={CoreApplication} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

/**
 * comm.io Applications
 */
registerApplications();
start();
