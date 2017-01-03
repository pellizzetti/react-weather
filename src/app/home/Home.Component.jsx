import React from 'react';
import { homeContainer, homePromptTitle } from '../styles';
import CityPromptContainer from '../prompt/CityPrompt.Container';

const HomeComponent = () =>
  <div style={homeContainer} className="home-container">
    <h1 style={homePromptTitle}>Enter the city and state</h1>
    <CityPromptContainer />
  </div>;

export default HomeComponent;
