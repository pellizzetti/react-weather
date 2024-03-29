import React, { PropTypes } from 'react';
import DailyForecastContainer from './DailyForecast.Container';
import { forecastContainer } from '../styles';

const ForecastComponent = (props) => {
  const isLoading = props.isLoading;
  return isLoading
  ?
    <div className="col-sm-12 text-center">
      <img alt="Loading" src="/images/ring.svg" />
    </div>
  :
    <div className="col-sm-12 text-center">
      <h1 style={{ fontFamily: 'Lato', fontSize: 48 }}>{props.cityForecast.city.name}</h1>
      <h2 style={{ fontFamily: 'Lato' }}>Click on a day to find more details</h2>
      <div style={forecastContainer}>
        {props.cityForecast.list.map((dailyForecast, index) =>
          <DailyForecastContainer
            key={dailyForecast.dt}
            index={index}
            dailyForecast={dailyForecast}
          />,
        )}
      </div>
    </div>;
};

ForecastComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  cityForecast: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.objectOf(PropTypes.any),
  ]).isRequired,
};

export default ForecastComponent;
