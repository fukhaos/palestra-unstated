import React, {Component} from 'react';
import {Text, View} from 'react-native';
import ButtonCounter from './components/ButtonCounter';
import {Footer, Button} from 'native-base';

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text> TELA INICIAL ! </Text>

        <Text>Component 1</Text>
        <ButtonCounter />
        <Text>Component 2</Text>
        <ButtonCounter />
      </View>
    );
  }
}
