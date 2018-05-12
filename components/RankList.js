



import React from 'react';
import {FlatList, Image, ListView, ScrollView, Text, View} from 'react-native';
import _ from 'lodash';
import icons from "../constants/icons";



const room = {
  "room": {
    "id": "1",
    "roommates": [
      {
        "points": 4,
        "username": "igi",
        "id": "1"
      },
      {
        "points": 10,
        "username": "aga",
        "id": "2"
      },
      {
        "points": 4,
        "username": "natalka",
        "id": "1"
      }
    ]
  }
};


export default class RankList extends React.Component {

  constructor() {
    super();
    this.state = {
      tasksDataSource: room,
    };
  };

  renderRow({item}) {


    return (
      <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between', borderBottomWidth: 1,  borderBottomColor: '#d1d1d1'}}>
        <View style={{flex: 1}}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{width: 50, height:50, padding: 2, backgroundColor:'powderblue', borderWidth: 1, borderColor: '#d1d1d1'}}>
              <Image source={icons.beer}
                     style={{
                       width: 45, height:45,
                     }}
                     resizeMode="contain"/>
            </View>
          </View>
        </View>
        <View style={{ flex: 3}}>
          <Text style={{fontSize: 24}}>{item.username}</Text>
          <Text style={{fontSize: 20, color: 'steelblue'}}>{item.points}</Text>
        </View>

      </View>
    );
  };

  keyExtractor = (item, index) => item.id + '';

  render() {
    const rank = _.sortBy(this.state.tasksDataSource.room.roommates, 'points').reverse();
console.log(this.state.tasksDataSource);
console.log(rank);
    return (
      <View style={{flex: 2}}>
        <ScrollView>
          <View>
            < FlatList
              data={rank}
              renderItem={this.renderRow}
              keyExtractor={this.keyExtractor}>
              keyExtractor={this.keyExtractor}>
            </FlatList>
          </View>
        </ScrollView>
      </View>
    );
  }
}
