import React, { Component, PropTypes } from 'react';
import CityPromptComponent from './CityPrompt.Component';

class CityPromptContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: 'column',
      city: '',
    };
    this.handleSubmitCity = this.handleSubmitCity.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
  }

  handleSubmitCity() {
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
