import React, { PropTypes } from 'react';
import { dailyContainer, dailyWeather, dailyHeader } from '../styles';

const DetailForecastComponent = props =>
  <div style={dailyContainer}>
    <h2 style={dailyHeader}>{props.date}</h2>
    <img style={dailyWeather} alt={props.description} src={`/images/weather-icons/${props.icon}.svg`} />
  </div>;

DetailForecastComponent.propTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default DetailForecastComponent;
