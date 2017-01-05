import React, { Component, PropTypes } from 'react';
import DetailForecastComponent from './DetailForecast.Component';

class DetailForecastContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      cityForecast: [],
    };
  }

  render() {
    return (<DetailForecastComponent
      isLoading={this.state.isLoading}
      cityForecast={this.state.cityForecast}
    />);
  }
}

DetailForecastContainer.propTypes = {
  params: PropTypes.objectOf(PropTypes.string),
  city: PropTypes.string,
};

export default DetailForecastContainer;
