import React, { PropTypes } from 'react';
import { dailyContainer, weatherImage, weatherDateHeader } from '../styles';

const DailyForecastComponent = props =>
  <div role="button" tabIndex={props.index} style={dailyContainer} onClick={props.onClick}>
    <h2 style={weatherDateHeader}>{props.date}</h2>
    <img style={weatherImage} alt={props.description} src={`/images/weather-icons/${props.icon}.svg`} />
  </div>;

DailyForecastComponent.propTypes = {
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default DailyForecastComponent;
