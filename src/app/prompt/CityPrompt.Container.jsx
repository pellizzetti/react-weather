import React, { Component, PropTypes } from 'react';
import CityPromptComponent from './CityPrompt.Component';

class CityPromptContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { city: '' };
    this.direction = 'column';
    this.handleSubmitCity = this.handleSubmitCity.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
  }
  handleSubmitCity() {
    console.log(this.state.city);
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

CityPromptContainer.propTypes = {
  direction: PropTypes.string,
};

export default CityPromptContainer;
