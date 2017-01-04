import React, { Component, PropTypes } from 'react';
import openWeatherApiHelper from '../utils/openWeatherApi.Helper';
import ForecastComponent from './Forecast.Component';

class ForecastContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      cityForecast: [],
    };
  }

  componentDidMount() {
    this.getForecast();
  }

  componentWillReceiveProps() {
    this.setState({ isLoading: true });
    this.getForecast();
  }

  getForecast() {
    openWeatherApiHelper.getCityForecast(this.props.params.city)
      .then((forecast) => {
        this.setState({
          isLoading: false,
          cityForecast: forecast.data,
        });
      });
  }

  render() {
    return (<ForecastComponent
      isLoading={this.state.isLoading}
      cityForecast={this.state.cityForecast}
    />);
  }
}

ForecastContainer.propTypes = {
  params: PropTypes.objectOf(PropTypes.string),
  city: PropTypes.string,
};

export default ForecastContainer;
