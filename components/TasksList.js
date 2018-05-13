import React from 'react';
import {FlatList, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import icons from "../constants/Icons";
import { graphql, QueryRenderer } from "react-relay";
import getRelayEnvironment from "../utils/getRelayEnvironment";

export default class TasksList extends React.Component {

  renderRow({item}) {

    let icon = icons.bowtie;
    if (item.iconIndex === 1) {
      icon = icons.window;
    } else if (item.iconIndex === 2) {
      icon = icons.finger;
    } else if (item.iconIndex === 3) {
      icon = icons.flower;
    }

    return (
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <View style={styles.imageWrapper}>
            <View style={styles.anotherImageWrapper}>
              <Image source={icon}
                     style={styles.icon}
                     resizeMode="contain"/>
            </View>
          </View>
        </View>
        <View style={styles.taskInfo}>
          <Text style={styles.taskTitle}>{item.title}</Text>
          <Text style={styles.taskReward}>{item.reward} punkty</Text>
        </View>
      </View>
    );
  };

  keyExtractor = (item, index) => item.id + '';

  render() {
    return (
      <QueryRenderer
        environment={getRelayEnvironment()}
        query={graphql`
          query TasksListQuery {
            tasks {
              id
              title
              iconIndex
              reward
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
          return(
            <View style={styles.container}>
              <ScrollView>
                <View>
                  < FlatList
                    data={props.tasks}
                    renderItem={this.renderRow}
                    keyExtractor={this.keyExtractor}>
                  </FlatList>
                </View>
              </ScrollView>
            </View>
          );
        }}
      />
    );
  }
}

const styles = StyleSheet.create({

  taskReward: {
    fontSize: 15,
    color: 'steelblue',
  },

  taskTitle: { fontSize: 34, },

  taskInfo: { flex: 3, },

  icon: {
    width: 45,
    height:45,
  },

  anotherImageWrapper: {
    width: 50,
    height:50,
    padding: 2,
    backgroundColor:'powderblue',
    borderWidth: 1,
    borderColor: '#d1d1d1',
  },

  imageWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageContainer: { flex: 1, },

  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#d1d1d1',
  },

  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 25,
    paddingHorizontal: 10,
    flex: 1,
  },
});

