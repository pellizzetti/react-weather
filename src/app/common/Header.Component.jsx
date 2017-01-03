import React from 'react';
import { headerContainer, headerTitle } from '../styles';
import CityPromptContainer from '../prompt/CityPrompt.Container';

const HeaderComponent = () =>
  <div style={headerContainer}>
    <h2 style={headerTitle}>React Weather</h2>
    <CityPromptContainer direction="row" />
  </div>;

export default HeaderComponent;
