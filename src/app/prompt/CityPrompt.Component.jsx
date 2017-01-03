import React, { PropTypes } from 'react';

const Button = props =>
  <button
    type="button"
    style={{ margin: 10 }}
    className="btn btn-success"
    onClick={props.onSubmitCity}
  >
    {props.children}
  </button>;

Button.propTypes = {
  onSubmitCity: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

const InputField = props =>
  <input
    className="form-control"
    onChange={props.onChangeCity}
    placeholder="Rio do Sul, Santa Catarina"
    type="text"
    value={props.city}
  />;

InputField.propTypes = {
  onChangeCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
};

const getStyles = props => ({
  display: 'flex',
  flexDirection: props.direction || 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: 300,
  alignSelf: 'right',
});

const CityPromptComponent = props =>
  <div style={getStyles(props)}>
    <InputField
      onChangeCity={props.onChangeCity}
      city={props.city}
    />
    <Button onSubmitCity={props.onSubmitCity} >
      Get Weather
    </Button>
  </div>;

CityPromptComponent.propTypes = {
  onSubmitCity: PropTypes.func.isRequired,
  onChangeCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
};

export default CityPromptComponent;
