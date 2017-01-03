import React from 'react';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';
import AppComponent from '../App.Component';
import HomeComponent from '../home/Home.Component';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={AppComponent}>
      <IndexRoute component={HomeComponent} />
    </Route>
  </Router>
);

export default routes;
