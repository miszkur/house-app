import React from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import icons from "../constants/Icons";
import getRelayEnvironment from "../utils/getRelayEnvironment";
import { graphql, QueryRenderer } from "react-relay";

export default class HomeScreenList extends React.Component {

  renderRow({item}) {

    let icon = icons.bowtie;
    if (item.task.iconIndex === 1) {
      icon = icons.window;
    } else if (item.task.iconIndex === 2) {
      icon = icons.finger;
    } else if (item.task.iconIndex === 3) {
      icon = icons.flower;
    }

    return (
      <View style={styles.itemContainer}>
        <View style={styles.iconRewardContainer}>
          <View style={styles.iconContainer}>
            <View style={styles.anotherIconContainer}>
              <Image source={icon}
                     style={styles.icon}
                     resizeMode="contain"/>
            </View>
          </View>
          <View >
            <Text style={styles.reward}>
              {item.task.reward} pkt
            </Text>
          </View>
        </View>
        <View style={styles.doneTaskInfo}>
          <Text style={styles.doneTaskTitle}>{item.task.title}</Text>
          <Text style={styles.doneTaskUsername}>{item.user.username}</Text>
          <Text style={styles.doneTaskDate}>{item.date}</Text>
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
          query HomeScreenListQuery {
            room(id: "5af73569ca392b2b8fd60a39") {
              doneTasks {
              id
              date
                task {
                  title
                  reward
                  iconIndex
                }
                user {
                  username
                }
              }
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
          return (
          <View style={styles.homeScreenListContainer}>
            <ScrollView>
              <View>
                < FlatList
                  data={props.room.doneTasks}
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

const styles = {

  doneTaskDate: {
    fontSize: 15,
    color: 'grey',
  },

  doneTaskUsername: {
    fontSize: 20,
    color: 'steelblue',
  },

  doneTaskTitle: { fontSize: 24, },

  doneTaskInfo: { flex: 3, },

  reward: {
    fontSize: 15,
    textAlign: 'center',
  },

  icon: {
    width: 45,
    height:45,
  },

  anotherIconContainer: {
    width: 50,
    height:50,
    padding: 2,
    backgroundColor:'powderblue',
    borderWidth: 1,
    borderColor: '#d1d1d1',
  },

  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconRewardContainer: { flex: 1, },

  homeScreenListContainer: {
    flex: 2,
  },

  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#d1d1d1',
  },


};
