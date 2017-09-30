/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: '书架',
      screen: 'sishu.BookrackScreen', // this is a registered name for a screen
      icon: require('./img/one.png'),
      selectedIcon: require('./img/one_selected.png'), // iOS only
      title: '书架'
    },
    {
      label: '精选',
      screen: 'sishu.RecommendScreen',
      icon: require('./img/two.png'),
      selectedIcon: require('./img/two_selected.png'), // iOS only
      title: '精选'
    },
    {
      label: '发现',
      screen: 'sishu.FindScreen',
      icon: require('./img/three.png'),
      selectedIcon: require('./img/three_selected.png'), // iOS only
      title: '发现'
    }
  ],
  tabsStyle: { // optional, add this if you want to style the tab bar beyond the defaults
  },
  appStyle: {
    //-------- Common ----------//
    orientation: 'portrait', // Sets a specific orientation to the entire app. Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'
    
    //navBar
    navBarTextColor: '#007aff', // change the text color of the title (remembered across pushes)
    navBarTextFontSize: 20, // change the font size of the title
    // navBarTextFontFamily: 'font-name', // Changes the title font
    navBarButtonColor: '#007aff', // Change color of nav bar buttons (eg. the back button) (remembered across pushes)
    navBarBackgroundColor: '#f7f7f7', // change the background color of the nav bar (remembered across pushes)
    
    //tabBar
    tabBarButtonColor: '#a0a0a0', // optional, change the color of the tab icons and text (also unselected). On Android, add this to appStyle
    tabBarSelectedButtonColor: '#007aff', // optional, change the color of the selected tab icon and text (only selected). On Android, add this to appStyle
    tabBarBackgroundColor: '#f2f2f2', // optional, change the background color of the tab bar
    
    //------------- Android ------------/
    //statusBar
    statusBarColor: '#002b4c', // change the color of the status bar.
    //navBar
    navBarTitleTextCentered: true, // default: false. centers the title.
    navBarHeight: 48, // Optional, set the navBar height in pixels.
    //tabBar
    forceTitlesDisplay: true, // Android only. If true - Show all bottom tab labels. If false - only the selected tab's label is visible.
    //navigationBar
    navigationBarColor: '#003a66',
    
    //-------------- IOS -------------/
    // backButtonImage: require('./img/pathToImage.png'), // Change the back button default arrow image with provided image. iOS only
    hideBackButtonTitle: true // Hide back button title. Default is false. If `backButtonTitle` provided so it will take into account and the `backButtonTitle` value will show. iOS only
  },
  drawer: {
    left: {
      screen: 'sishu.MenuDrawer'
    }
  }
});
