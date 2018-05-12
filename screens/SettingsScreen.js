import React from 'react';
import { ExpoConfigView } from '@expo/samples';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Ustawienia',
    headerTintColor: 'skyblue',
    headerStyle: {
      backgroundColor: 'steelblue',
      borderBottomColor: 'skyblue',
      borderBottomWidth: 3,
    },
    headerTitleStyle: {
      fontSize: 22,
    },
  };

  render() {
    return <ExpoConfigView />;
  }
}
