import React from 'react';
import {
  StyleSheet,
  Image,
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
        <View style={styles.item}>
          <Image source={{uri:'http://p4.qhimg.com/d/novel_17628794494928409888.jpg'}} style={styles.img}></Image>
          <Image source={{uri:'http://p9.qhimg.com/t018a8fa019d426e2e4.png'}} style={styles.shadow}></Image>
          <Text style={styles.info}>凡凡凡凡</Text>
        </View>
        <View style={styles.item}>
          <Image source={{uri:'http://p8.qhimg.com/d/novel_17009086067485798526.jpg'}} style={styles.img}></Image>
          <Image source={{uri:'http://p9.qhimg.com/t018a8fa019d426e2e4.png'}} style={styles.shadow}></Image>
          <Text style={styles.info}>凡凡凡凡</Text>
        </View>
        <View style={styles.item}>
          <Image source={{uri:'http://p9.qhimg.com/d/novel_16768498280745492133.jpg'}} style={styles.img}></Image>
          <Image source={{uri:'http://p9.qhimg.com/t018a8fa019d426e2e4.png'}} style={styles.shadow}></Image>
          <Text style={styles.info}>凡凡凡凡</Text>
        </View>
        <View style={styles.item}>
          <Image source={{uri:'http://p6.qhimg.com/d/novel_14504384412757682457.jpg'}} style={styles.img}></Image>
          <Image source={{uri:'http://p9.qhimg.com/t018a8fa019d426e2e4.png'}} style={styles.shadow}></Image>
          <Text style={styles.info}>凡凡凡凡</Text>
        </View>
        <View style={styles.item}>
          <Image source={{uri:'http://p9.qhimg.com/d/novel_12548071534615965962.jpg'}} style={styles.img}></Image>
          <Image source={{uri:'http://p9.qhimg.com/t018a8fa019d426e2e4.png'}} style={styles.shadow}></Image>
          <Text style={styles.info}>凡凡凡凡</Text>
        </View>
        <View style={styles.item}>
          <Image source={{uri:'http://p8.qhimg.com/d/novel_12394072463848217041.jpg'}} style={styles.img}></Image>
          <Image source={{uri:'http://p9.qhimg.com/t018a8fa019d426e2e4.png'}} style={styles.shadow}></Image>
          <Text style={styles.info}>凡凡凡凡</Text>
        </View>
        <View style={styles.item}>
          <Image source={{uri:'http://p1.qhimg.com/d/novel_12736150462948068313.jpg'}} style={styles.img}></Image>
          <Image source={{uri:'http://p9.qhimg.com/t018a8fa019d426e2e4.png'}} style={styles.shadow}></Image>
          <Text style={styles.info}>凡凡凡凡</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  item: {
    margin: 10,
    width: 92,
    height: 160,
    // borderRadius: 2,
    // borderWidth: 1,
    // borderColor: '#00ff00',
  },
  img:{
    height: 128,
    resizeMode: "contain",
  },
  shadow: {
    height: 10,
    resizeMode: "contain"
  },
  info: {
    textAlign: 'center'
  },
});
