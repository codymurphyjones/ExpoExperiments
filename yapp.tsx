// App.js
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { StyleSheet, Text, View } from 'react-native';
import { ThemeContextProvider } from '../src/with/theme'

import Icon from 'react-native-vector-icons/Feather';

import MainScreen from '../src/screens/Main';
import SettingsScreen from '../src/screens/Settings';
import Profile from '../src/screens/Profile';
import Trending from '../src/screens/Trending';
import Login from '../src/screens/Login';
import AuthLoading from '../src/screens/AuthLoading';

import TabBar from '../src/components/TabBar';
import {UserContextProvider} from '../src/with/user'

/*
react-navigation
react-navigation-stack
react-navigation-tabs
react-native-vector-icons
firebase
node-iex-cloud
react-native-gesture-handler
*/


const navIconSize = 24;

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
		screen: MainScreen,
		navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={navIconSize} color={tintColor} />
        )
      } 
	},
    Trending: {
		screen: Trending,
		navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="trending-up" size={navIconSize} color={tintColor} />
        )
      }
	},
	Profile: {
		screen: Profile,
		navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user" size={navIconSize} color={tintColor} />
        )
      }
  },
  Settings: {
		screen: SettingsScreen,
		navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="settings" size={navIconSize} color={tintColor} />
        )
      }
	},
  },
  {
    tabBarComponent: props => <TabBar lazy={false} {...props} />,
	tabBarOptions: {
		showLabel: false,
		showIcon: true,
		inactiveTintColor: 'red',
    activeTintColor: 'red'
    
    },
    lazy: false
  },
  

);
/*
inactiveTintColor: '#900',
    activeTintColor: '#a49',
    */

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      App: TabNavigator,
      Auth: Login,
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);


export default function App() {
  
  return (
    <UserContextProvider>
   <ThemeContextProvider>
      <AppContainer />
   </ThemeContextProvider>
   </UserContextProvider>
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
