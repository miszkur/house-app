import React from 'react';
import { ExpoConfigView } from '@expo/samples';

export default class PodiumScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}
/**
 * Created by natal on 12.05.2018.
 */
