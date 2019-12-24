// App.js
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { StyleSheet, Text, View } from 'react-native';
import { ThemeContextProvider } from './src/theme'

import Icon from 'react-native-vector-icons/Feather';

import MainScreen from './src/screens/Main';
import SettingsScreen from './src/screens/Settings';
import Profile from './src/screens/Profile';
import Trending from './src/screens/Trending';
import Login from './src/screens/Login';
import AuthLoading from './src/screens/AuthLoading';

import TabBar from './src/components/TabBar';

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
          <Icon name="trending-up" size={30} color={tintColor} />
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
          <Icon name="settings" size={30} color={tintColor} />
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

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      App: TabNavigator,
      Auth: Login,
    },
    {
      initialRouteName: 'Auth',
    }
  )
);


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
