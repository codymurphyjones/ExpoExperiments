// App.js
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { StyleSheet, Text, View } from 'react-native';
import { ThemeContextProvider } from './src/theme'

import Icon from 'react-native-vector-icons/FontAwesome';
import MainScreen from './screens/Main';
import SettingsScreen from './screens/Settings';
import TabBar from './src/TabBar';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
		screen: MainScreen,
		navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={30} color={tintColor} />
        )
      },
	  tabBarOptions: {
		showLabel: false,
		showIcon: true,
		tintColor: '#900',
		activeTintColor: '#aaa',
	  }
	},
    Trending: {
		screen: SettingsScreen,
		navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="line-chart" size={30} color={tintColor} />
        )
      },
	  tabBarOptions: {
		showLabel: false,
		showIcon: true,
		tintColor: '#900',
		activeTintColor: '#aaa',
	  }
	},
	Time: {
		screen: MainScreen,
		navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user" size={30} color={tintColor} />
        )
      },
	  tabBarOptions: {
		showLabel: false,
		showIcon: true,
		tintColor: '#900',
		activeTintColor: '#aaa',
	  }
	},
	Settings: {
		screen: SettingsScreen,
		navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="cog" size={30} color={tintColor} />
        )
      },
	  tabBarOptions: {
		showLabel: false,
		showIcon: true,
		tintColor: '#900',
		activeTintColor: '#aaa',
	  }
	}
  },
  {
    tabBarComponent: props => <TabBar {...props} />,
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
