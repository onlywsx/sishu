import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class BookrackScreen extends React.Component {
  static navigatorButtons = {
    leftButtons: [
      {
        icon: require('../img/navicon_menu.png'), // for icon button, provide the local image asset name
        id: 'menu' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
      }
    ],
    rightButtons: [
      {
        icon: require('../img/delete.png'), // for icon button, provide the local image asset name
        id: 'delete' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
      }
    ]
  };

  constructor(props) {
    super(props);
    // if you want to listen on navigator events, set this up
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
    if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
      if (event.id == 'menu') { // this is the same id field from the static navigatorButtons definition
        this.props.navigator.toggleDrawer({
          side: 'left',
          animated: true
        });
      }
      if (event.id == 'delete') {
        
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});