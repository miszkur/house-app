import React from 'react';
import { Platform, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import PodiumScreen from '../screens/PodiumScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : 'md-home'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-clipboard` : 'md-clipboard'}
    />
  ),
};

const PodiumStack = createStackNavigator({
  Podium: PodiumScreen,
});

PodiumStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-podium` : 'md-podium'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-settings` : 'md-settings'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  PodiumStack,
  SettingsStack,
},
  {
    tabBarOptions: {
      activeTintColor: 'skyblue',
      labelStyle: {
        fontSize: 0,
      },
      style: {
        backgroundColor: 'steelblue',
      },
    }
  });
