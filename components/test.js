import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';


export default class Test extends Component{
  render()
  {
    return(
      <View>
        <Text>
          This is TTTest
        </Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('Test', ()=>Test);