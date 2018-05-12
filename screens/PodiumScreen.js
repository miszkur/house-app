import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import RankList from "../components/RankList";
import {Text, View} from "react-native";

export default class PodiumScreen extends React.Component {
  static navigationOptions = {
    title: 'Ranking',
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
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View style={{flex: 1}}>
        <Text style={{ fontSize: 50, color: 'steelblue', textAlign: 'center'}}>404 fnf</Text>
      <RankList style={{flex: 1}}/>
    </View>);
  }
}
/**
 * Created by natal on 12.05.2018.
 */
