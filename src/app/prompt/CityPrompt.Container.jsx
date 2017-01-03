import React, { Component, PropTypes } from 'react';
import CityPromptComponent from './CityPrompt.Component';
import openWeatherApiHelper from '../utils/openWeatherApi.Helper';

class CityPromptContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { city: '' };
    this.direction = 'column';
    this.handleSubmitCity = this.handleSubmitCity.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
  }
  handleSubmitCity() {
    // openWeatherApiHelper.getCityWeather(this.state.city);
    // openWeatherApiHelper.getCityForcast(this.state.city);
    const city = this.state.city;
    this.setState({ city: '' });

    this.context.router.push(`/forecast/${city}`);
  }
  handleChangeCity(e) {
    this.setState({ city: e.target.value });
  }
  render() {
    return (
      <CityPromptComponent
        direction={this.props.direction}
        onSubmitCity={this.handleSubmitCity}
        onChangeCity={this.handleChangeCity}
        city={this.state.city}
      />
    );
  }
}

CityPromptContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

CityPromptContainer.propTypes = {
  direction: PropTypes.string,
};

export default CityPromptContainer;
