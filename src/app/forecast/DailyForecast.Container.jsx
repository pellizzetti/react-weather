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
      index={this.props.index}
      onClick={this.handleClick}
      date={dailyDate}
      description={dailyDescription}
      icon={dailyIcon}
    />);
  }
}

DailyForecastContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

DailyForecastContainer.propTypes = {
  index: PropTypes.number.isRequired,
  dailyForecast: PropTypes.oneOfType([
    React.PropTypes.arrayOf(PropTypes.any),
    React.PropTypes.objectOf(PropTypes.any),
  ]).isRequired,
};

export default DailyForecastContainer;
