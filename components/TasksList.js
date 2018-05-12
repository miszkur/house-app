import React from 'react';
import {Dimensions, FlatList, Image, ListView, ScrollView, StyleSheet, Text, View} from 'react-native';
import icons from "../constants/icons";


const doneTasks = [
  {
    "task": {
      "title": "zrobienie apki",
      "reward": 3,
      "iconIndex": 0
    },
    "user": {
      "username": "igi"
    },
    "date": "dzisiaj"
  },
  {
    "task": {
      "title": "mycie podłogi",
      "reward": 4,
      "iconIndex": 1
    },
    "user": {
      "username": "aga"
    },
    "date": "wczoraj"
  },
  {
    "task": {
      "title": "zrobienie apki",
      "reward": 3,
      "iconIndex": 0
    },
  }
];

export default class TasksList extends React.Component {

  constructor() {
    super();
    this.state = {
      tasksDataSource: doneTasks,
    };
  };

  renderRow({item}) {

    let icon = icons.bowtie;
    if (item.task.iconIndex === 1) {
      icon = icons.window;
    } else if (item.task.iconIndex === 2) {
      icon = icons.finger;
    } else if (item.task.iconIndex === 3) {
      icon = icons.flower;
    }
    icon = icons.flower;

    return (
      <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between', borderBottomWidth: 1,  backgroundColor: 'red', borderBottomColor: '#d1d1d1'}}>
        <View style={{flex: 1}}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{width: 50, height:50, padding: 2, backgroundColor:'powderblue', borderWidth: 1, borderColor: '#d1d1d1'}}>
              <Image source={icon}
                     style={{
                       width: 45, height:45,
                     }}
                     resizeMode="contain"/>
            </View>
          </View>
        </View>
        <View style={{ flex: 3}}>
          <Text style={{fontSize: 34}}>{item.task.title}</Text>
          <Text style={{fontSize: 15, color: 'steelblue'}}>{item.task.points} punkty</Text>
        </View>

      </View>
    );
  };

  keyExtractor = (item, index) => item.id + '';

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            < FlatList
              data={this.state.tasksDataSource}
              renderItem={this.renderRow}
              keyExtractor={this.keyExtractor}>
            </FlatList>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
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
  card: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    marginTop: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
  },
  subheading: {
    fontSize: 18,
    marginTop: 3,
    color: '#6e080e',
  },
  map: {
    alignSelf: 'stretch',
    flex: 1,
  },
  topWrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  roundWrapper: {
    overflow: 'hidden',

    width: '100%',
    height: '100%',
  },
  addWrapper: {
    width: Dimensions.get('window').width - 50,
    height: Dimensions.get('window').width - 50,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'powderblue',
    overflow: 'hidden',
  },
  button: {
    alignItems:'center',
    justifyContent: 'center',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    backgroundColor: 'steelblue',
    marginRight:5,
    marginLeft:5,
    flex:1,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#ffffff',
  },
})

