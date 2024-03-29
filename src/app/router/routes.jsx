import React from 'react';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';
import AppComponent from '../App.Component';
import HomeComponent from '../home/Home.Component';
import ForecastContainer from '../forecast/Forecast.Container';
import DetailForecastComponent from '../forecast/DetailForecast.Component';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={AppComponent}>
      <IndexRoute component={HomeComponent} />
      <Route path="/forecast/:city" component={ForecastContainer} />
      <Route path="/forecast/:city/detail" component={DetailForecastComponent} />
    </Route>
  </Router>
);

export default routes;
