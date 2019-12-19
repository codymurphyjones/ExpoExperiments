// App.js
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { StyleSheet, Text, View } from 'react-native';
import { ThemeContextProvider } from './src/theme'

import Icon from 'react-native-vector-icons/FontAwesome';
import MainScreen from './screens/Main';
import SettingsScreen from './screens/Settings';
import Profile from './screens/Profile';
import Trending from './screens/Trending';
import TabBar from './src/TabBar';

console.reportErrorsAsExceptions = false;

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
		screen: MainScreen,
		navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={30} color={tintColor} />
        )
      } 
	},
    Trending: {
		screen: Trending,
		navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="line-chart" size={30} color={tintColor} />
        )
      }
	},
	Profile: {
		screen: Profile,
		navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user" size={30} color={tintColor} />
        )
      }
	},
	Settings: {
		screen: SettingsScreen,
		navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="cog" size={30} color={tintColor} />
        )
      }
	}
  },
  {
    tabBarComponent: props => <TabBar {...props} />,
	tabBarOptions: {
		showLabel: false,
		showIcon: true,
		tintColor: '#900',
		activeTintColor: '#a49',
	  }
  },
);

const AppContainer = createAppContainer(TabNavigator);


export default function App() {
  return (
   <ThemeContextProvider>
      <AppContainer />
   </ThemeContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
