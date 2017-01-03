import React from 'react';
import { header } from '../styles';
import CityPromptContainer from '../prompt/CityPrompt.Container';

const HeaderComponent = () =>
  <div style={header}>
    <h2 style={{ margin: 0 }}>React Weather</h2>
    <CityPromptContainer direction="row" />
  </div>;

export default HeaderComponent;
