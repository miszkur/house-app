import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  ListView,
  Text,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import {WebBrowser} from 'expo';

import {MonoText} from '../components/StyledText';

const doneTasks =  [
  {
    "id": 1,
    "task": {
      "title": "zrobienie apki"
    },
    "user": {
      "username": "igi"
    }
  },
  {
    "id": 2,
    "task": {
      "title": "mycie podłogi"
    },
    "user": {
      "username": "aga"
    }
  }
];

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      tasksDataSource: doneTasks,
    };
  };

  renderRow({item}) {
    return (
        <View  style={{padding: 10, flexDirection:'row',  justifyContent: 'space-between'}}>
          <View style={{ flex: 1, backgroundColor:'red' }}>
            <View style={{ flex: 1, backgroundColor:'grey' }}>

            </View>
            <View style={{ flex: 1, backgroundColor:'pink' }}>

            </View>
          </View>
          <View style={{padding: 10,flex: 3, backgroundColor:'lightblue'}}>
            <Text style={{ fontSize: 20}}>{item.task.title.toUpperCase()}</Text>
            <Text style={{ fontSize: 15, color: 'grey'}}>{item.user.username}</Text>
          </View>

        </View>
      );
  };
  keyExtractor = (item, index) => item.id + '';

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, marginTop: 40, justifyContent: 'space-evenly', flexDirection: 'row'}}>
          <View style={{ padding: 10, paddingTop:0, flex: 1, alignItems: 'center',justifyContent: 'flex-end' }}>
            <Image
              style={{
                flex: 1,
              }}
              resizeMode="contain"
              source={require('../assets/images/calendar.png')}
            />
            <View style={{ position:'absolute', alignItems: 'center',justifyContent: 'flex-end'}}>
              <Text style={{fontSize: 50}}>45</Text>
              <Text style={{marginBottom:25, fontSize: 20}}>DNI DO KOŃCA</Text>
            </View>
          </View>
          <View style={{margin: 10, flex: 1,  alignItems: 'center', justifyContent: 'center', backgroundColor: 'skyblue', borderRadius: 15}}>
            <Text style={{fontSize: 20}}>PUNKTYY</Text>
            <Text style={{fontSize: 50}}>45</Text>
          </View>
        </View>
        <View style={styles.listView}>
          <ScrollView >
            <View>
              < FlatList
                data={this.state.tasksDataSource}
                renderItem={this.renderRow}
                keyExtractor={this.keyExtractor}>
              </FlatList>
            </View>
          </ScrollView>
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listView: {
    flex: 2
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },

  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {height: -3},
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
