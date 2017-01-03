import React, { PropTypes } from 'react';
import { appContainer } from './styles';
import HeaderComponent from './common/Header.Component';

const AppComponent = props =>
  <div style={appContainer} className="app-container">
    <HeaderComponent />
    {props.children}
  </div>;

AppComponent.propTypes = {
  children: PropTypes.element,
};

export default AppComponent;
