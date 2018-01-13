import React, { Component } from 'react';
import {  Platform , StyleSheet} from 'react-native';
import { Container, Content, Button , Text, Icon, Left,Body,Title} from 'native-base';
import {HeaderComponent, FooterComponent} from './src/components';
import HomeView from './src/view/HomeView';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <HomeView></HomeView>
    );
  }
}

const styles = StyleSheet.create({
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
