import React, { Component } from 'react';
import { Button } from 'react-native';
import PropTypes from 'prop-types';

class ButtonDemo extends Component {
  render() {
    return (
      <Button
        onPress={this.props.onPress}
        title={this.props.title}
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    )
  }
}
ButtonDemo.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func
}
export default ButtonDemo;