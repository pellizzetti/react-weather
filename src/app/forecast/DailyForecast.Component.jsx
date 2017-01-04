import React, { PropTypes } from 'react';
import { dailyContainer, dailyWeather, dailyHeader } from '../styles';

const DailyForecastComponent = props =>
  <div style={dailyContainer}>
    <h2 style={dailyHeader}>{props.date}</h2>
    <img style={dailyWeather} alt={props.alt} src={props.icon} />
  </div>;

DailyForecastComponent.defaultProps = {
  date: '4, Jan',
  alt: 'Heavy intensive rain',
  icon: '',
};

DailyForecastComponent.propTypes = {
  date: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default DailyForecastComponent;
