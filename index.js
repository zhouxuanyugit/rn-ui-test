import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export class ButtonDemo extends Component {
  render() {
    return (
      <Button
        onPress={this.props.onPress}
        title={this.props.title}
        color={this.props.color}
        accessibilityLabel="Learn more about this purple button"
      />
    )
  }
}
ButtonDemo.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  color: PropTypes.string
}

export default class RadioView extends Component {
  render() {
    let color = this.props.checked ? 'rgb(0, 200, 171)' : '#fff';
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={this.pressed.bind(this)} style={style.container}>
          <View
            style={{
              backgroundColor: color,
              width: 20,
              height: 20,
              borderRadius: 50,
              borderColor: '#d9d9d9',
              borderWidth: 1,
              marginRight: 10
            }}>
          </View>
          <View>
            <Text>{this.props.label}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  pressed() {
    let { onCheck, id, type } = this.props;
    onCheck(id, type);
  }
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row"
  }
})