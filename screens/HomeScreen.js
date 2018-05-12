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
import DaysTillDeadline from '../components/DaysTillDeadline';
import SelfPoints from '../components/SelfPoints';
import HomeScreenList from '../components/HomeScreenList';



export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

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
              <DaysTillDeadline />
              <Text style={{marginBottom:25, fontSize: 20}}>DNI DO KOŃCA</Text>
            </View>
          </View>
          <View style={{margin: 10, flex: 1,  alignItems: 'center', justifyContent: 'center', backgroundColor: 'skyblue', borderRadius: 15}}>
            <Text style={{fontSize: 20}}>PUNKTY</Text>
            < SelfPoints />
          </View>
        </View>

          <HomeScreenList style={{flex: 2}}/>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
