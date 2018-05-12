import React from 'react';
import {FlatList, Image, ListView, ScrollView, Text, View} from 'react-native';
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
      <View style={{flex: 1, backgroundColor: 'blue'}}>
      <Text>lalalala</Text>
      </View>
    );
  }
}
