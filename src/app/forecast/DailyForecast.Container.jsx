import React, { Component, PropTypes } from 'react';
import openWeatherApiHelper from '../utils/openWeatherApi.Helper';
import DailyForecastComponent from './DailyForecast.Component';

class DailyForecastContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { dailyForecast: [] };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const city = this.context.router.params.city;
    const dailyForecast = this.state.dailyForecast;
    this.setState({ dailyForecast: [] });

    this.context.router.push({
      pathname: `/forecast/${city}/detail`,
      state: dailyForecast,
    });
  }

  render() {
    const dailyDate = openWeatherApiHelper.convertUnixToDate(this.props.dailyForecast.dt);
    const dailyDescription = this.props.dailyForecast.weather[0].description;
    const dailyIcon = this.props.dailyForecast.weather[0].icon;

    return (<DailyForecastComponent
      date={dailyDate}
      description={dailyDescription}
      icon={dailyIcon}
      onClick={this.handleClick}
    />);
  }
}

DailyForecastContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

DailyForecastContainer.propTypes = {
  params: PropTypes.objectOf(PropTypes.string),
  city: PropTypes.string,
};

export default DailyForecastContainer;
