import React, { PropTypes } from 'react';
import { weatherImage, weatherDateHeader, detailDescription } from '../styles';

const DetailForecastComponent = props =>
  <div className="col-sm-12 text-center">
    <h2 style={weatherDateHeader}>{props.location.state.date}</h2>
    <img style={weatherImage} alt={props.location.state.weather.description} src={`/images/weather-icons/${props.location.state.weather.icon}.svg`} />
    <div style={detailDescription}>
      <p>{props.params.city}</p>
      <p>{props.location.state.weather.description}</p>
      <hr />
      <p>Min temp: {props.location.state.temp.min} °C</p>
      <p>Max temp: {props.location.state.temp.max} °C</p>
      <p>Humidity: {props.location.state.humidity}</p>
    </div>
  </div>;

DetailForecastComponent.propTypes = {
  params: PropTypes.objectOf(PropTypes.string).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      date: PropTypes.string,
      weather: PropTypes.objectOf(PropTypes.any),
      temp: PropTypes.objectOf(PropTypes.number),
      humidity: PropTypes.number,
    }),
  }).isRequired,
};

export default DetailForecastComponent;
