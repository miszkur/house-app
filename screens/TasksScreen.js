import React from 'react';
import {StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';
import TasksList from "../components/TasksList";

export default class TasksScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      add: false,
      text: " ",
    };
  }

  onPressButton = () => {
    this.setState({
      add: true,
    })
  };

  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    return {
      marginRight: 20,
      title: 'Zadania',
      headerTintColor: 'skyblue',
      headerStyle: {
        backgroundColor: 'steelblue',
        borderBottomColor: 'skyblue',
        borderBottomWidth: 3,
      },
      headerTitleStyle: {
        fontSize: 22,
      },
      headerRight: (
        <TouchableOpacity
          onPress={() => params.onPressButton()}
          style={styles.addTaskButton}
        >
          <Text style={styles.addTaskButtonText}>+</Text>
        </TouchableOpacity>

      ),
    }
  };

  componentDidMount() {
    const {navigation} = this.props;

    navigation.setParams({
      onPressButton: this.onPressButton,
    });
  }

  closeAdd = () => this.setState({add: false});

  renderAdd = () => (
    <View style={styles.topWrapper}>
      <View style={styles.addWrapper}>
        <View style={styles.roundWrapper}>
          <View style={styles.anotherInputWrapper}>
            <View style={styles.inputWrapper}>
              <TextInput
                placeholder={"Nazwa zadania"}
                style={styles.input}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
              />
            </View>
          </View>
          <View style={styles.rating}>
            <AirbnbRating
              count={5}
              reviews={["1pkt.", "2pkt.", "3pkt.", "4pkt.", "5pkt."]}
              defaultRating={1}
              size={30}

            />
          </View>
          <View style={styles.buttonsWrapper}>
            <TouchableOpacity
              style={styles.button}
              onPress={this.closeAdd}
            >
              <Text style={styles.buttonText}>Zamknij</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
            >
              <Text style={styles.buttonText}>Dodaj</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.center}>
        <View style={styles.container}>
          <View  style={styles.title}>
            <Text style={styles.titleText}>Zadania do zrobienia!</Text>
          </View>
          <View  style={styles.tasksListWrapper}>
            <TasksList style={styles.taskList}/>
          </View>
        </View>
        {this.state.add === true && this.renderAdd()}
      </View>

    );
  }
}

const styles = StyleSheet.create({

  taskList: {
    borderTopWidth: 1,
    flex: 1,
  },

  tasksListWrapper: { flex: 3, },

  titleText: {
    fontSize: 50,
    flex: 1,
    color: 'steelblue',
    textAlign: 'center',
  },

  title: { flex: 1, },

  rating: {
    alignSelf: 'stretch',
    flex: 2,
    marginBottom: 10,
  },

  input: {
    height: 40,
    borderColor: 'steelblue',
    borderWidth: 3,
  },

  inputWrapper: {
    alignSelf: 'stretch',
    flex: 1,
  },

  anotherInputWrapper: {
    alignSelf: 'stretch',
    flex: 3,
  },

  buttonsWrapper: {
    flexDirection: 'row',
    flex: 1,
  },

  addTaskButtonText: {
    fontSize: 30,
    color: 'steelblue',
  },

  addTaskButton: {
    marginRight: 30,
    backgroundColor: 'skyblue',
    borderRadius: 50,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
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
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    backgroundColor: 'steelblue',
    marginRight: 5,
    marginLeft: 5,
    flex: 1,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#ffffff',
  },
});
