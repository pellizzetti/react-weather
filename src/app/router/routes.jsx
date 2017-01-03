import React from 'react';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';
import AppComponent from '../App.Component';
import HomeComponent from '../home/Home.Component';
import ForecastComponent from '../forecast/Forecast.Component';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={AppComponent}>
      <IndexRoute component={HomeComponent} />
      <Route path="/forecast/:city" component={ForecastComponent} />
    </Route>
  </Router>
);

export default routes;
