import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

class MenuDrawer extends React.Component {

  onShowModal = () => {
    this.toggleDrawer();
  };

  onPushToFirstTab = () => {
    this.toggleDrawer();
  };

  toggleDrawer = () => {
    this.props.navigator.toggleDrawer({
      side: 'left'
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <Button
            onPress={this.onShowModal}
            title="Show Modal"/>
        </View>
        <View style={styles.button}>
          <Button
            onPress={this.onPushToFirstTab}
            title="Push to First Tab"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  button: {
    marginTop: 16
  }
});

export default MenuDrawer;
