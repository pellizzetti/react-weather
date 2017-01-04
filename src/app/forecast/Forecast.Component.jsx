import React, { PropTypes } from 'react';

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
    </div>;
};

ForecastComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default ForecastComponent;
