import { Navigation } from 'react-native-navigation';
import SplashScreen from 'react-native-splash-screen'

import BookrackScreen from './BookrackScreen';
import RecommendScreen from './RecommendScreen';
import FindScreen from './FindScreen';
import MenuDrawer from './MenuDrawer';

// register all screens of the app (including internal ones)
export function registerScreens() {
  SplashScreen.hide();//for ios
  Navigation.registerComponent('sishu.BookrackScreen', () => BookrackScreen);
  Navigation.registerComponent('sishu.RecommendScreen', () => RecommendScreen);
  Navigation.registerComponent('sishu.FindScreen', () => FindScreen);
  Navigation.registerComponent('sishu.MenuDrawer', () => MenuDrawer);
}