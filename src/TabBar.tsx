// TabBar.js
import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { BottomTabBar } from 'react-navigation-tabs';

import { withTheme } from './theme';

const TabBar = props => {
	
	var {height, width} = Dimensions.get('window');
	console.log({height, width});
	
  return (
    <BottomTabBar
      {...props}
      labelStyle={style.label}
	  activeTintColor={props.theme.backgroundColor}
    />
  );
};

const style = StyleSheet.create({
  label: { fontSize: 22, fontWeight: '400',},
});

export default withTheme(TabBar);
