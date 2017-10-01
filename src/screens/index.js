import { Navigation, ScreenVisibilityListener } from 'react-native-navigation';
import SplashScreen from 'react-native-splash-screen'

import BookrackScreen from './BookrackScreen';
import RecommendScreen from './RecommendScreen';
import DiscoveryScreen from './DiscoveryScreen';
import MenuDrawer from './MenuDrawer';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('sishu.BookrackScreen', () => BookrackScreen);
  Navigation.registerComponent('sishu.RecommendScreen', () => RecommendScreen);
  Navigation.registerComponent('sishu.DiscoveryScreen', () => DiscoveryScreen);
  Navigation.registerComponent('sishu.MenuDrawer', () => MenuDrawer);
}

export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({screen}) => {
      console.log(`Displaying screen ${screen}`);
    },
    didAppear: ({screen, startTime, endTime, commandType}) => {
      SplashScreen.hide();//for ios
      console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`)
    },
    willDisappear: ({screen}) => console.log(`Screen will disappear ${screen}`),
    didDisappear: ({screen}) => console.log(`Screen disappeared ${screen}`)
  }).register();
}