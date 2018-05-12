import React from 'react';
import {FlatList, ListView, ScrollView, Text, View} from 'react-native';


const doneTasks = [
  {
    "task": {
      "title": "zrobienie apki",
      "reward": 3
    },
    "user": {
      "username": "igi"
    }
  },
  {
    "task": {
      "title": "mycie podłogi",
      "reward": 4
    },
    "user": {
      "username": "aga"
    }
  }
];

export default class HomeScreenList extends React.Component {

  constructor() {
    super();
    this.state = {
      tasksDataSource: doneTasks,
    };
  };

  renderRow({item}) {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between',borderStyle: 'solid', borderColor: 'black'}}>
        <View style={{flex: 1}}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{ width: 45, height:45 }}>

            </View>
          </View>
          <View style={{backgroundColor: 'pink'}}>
            <Text style={{fontSize: 15, textAlign: 'center'}}>{item.task.reward} pkt</Text>
          </View>
        </View>
        <View style={{padding: 10, flex: 3}}>
          <Text style={{fontSize: 20}}>{item.task.title.toUpperCase()}</Text>
          <Text style={{fontSize: 15, color: 'grey'}}>{item.user.username}</Text>
        </View>

      </View>
    );
  };

  keyExtractor = (item, index) => item.id + '';

  render() {
    return (
      <View style={{flex: 2}}>
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
