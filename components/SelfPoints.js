import React from 'react';
import {graphql, QueryRenderer} from 'react-relay';
import { StyleSheet, Text } from 'react-native';

import getRelayEnvironment from '../utils/getRelayEnvironment';

export default class SelfPoints extends React.Component {

  render() {
    return (
      <QueryRenderer
        environment={getRelayEnvironment()}
        query={graphql`
          query SelfPointsQuery {
            user(id: "5af7008b127169039af67b5f") {
              points
            }
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (error) {
            return <Text>Error!</Text>;
          }
          if (!props) {
            return <Text>Loading...</Text>;
          }
          return <Text style={styles.selfPointsText}>
            {props.user.points}
            </Text>;
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  selfPointsText: {
    fontSize: 50,
  },
});
