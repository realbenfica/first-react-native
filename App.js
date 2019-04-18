import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

import Test from './components/test';


export default class myapp extends Component {
  render() {
    console.log("Privet")

    return (
      <View>
        <Test />
      </View>
    )
  }
}

AppRegistry.registerComponent('myapp', () => myapp);