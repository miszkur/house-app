import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import DaysTillDeadline from '../components/DaysTillDeadline';
import SelfPoints from '../components/SelfPoints';
import HomeScreenList from '../components/HomeScreenList';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Strona główna',
    headerTintColor: 'skyblue',
    headerStyle: {
      backgroundColor: 'steelblue',
      borderBottomColor: 'skyblue',
      borderBottomWidth: 3,
    },
    headerTitleStyle: {
      fontSize: 22,
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainInfo}>
          <View style={styles.daysTillEndContainer}>
            <Image
              style={styles.daysTillEndImage}
              resizeMode="contain"
              source={require('../assets/images/calendar.png')}
            />
            <View style={styles.daysTillEnd}>
              <DaysTillDeadline/>
              <Text style={styles.daysTillEndText}>
                DNI DO KOŃCA
              </Text>
            </View>
          </View>
          <View style={styles.selfPointsContainer}>
            <Text style={styles.selfPointsText}>
              MOJE PUNKTY
            </Text>
            < SelfPoints/>
          </View>
        </View>
        <HomeScreenList style={styles.homeScreenList}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  homeScreenList:  {
    flex: 2,
  },

  selfPointsText: {
    fontSize: 20,
  },

  selfPointsContainer: {
    margin: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    borderRadius: 15,
  },

  daysTillEndImage: {
    flex: 1,
  },

  daysTillEndText: {
    marginBottom: 25,
    fontSize: 15,
  },

  daysTillEnd: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  daysTillEndContainer: {
    padding: 10,
    paddingTop: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },

  mainInfo: {
    flex: 1,
    marginTop: 40,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#b3b3b3',
  },
});
