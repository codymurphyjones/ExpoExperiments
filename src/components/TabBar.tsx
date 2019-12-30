// TabBar.js
import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { BottomTabBar } from 'react-navigation-tabs';

import { withTheme } from '../with/theme';

const TabBar = props => {
	
	var {height, width} = Dimensions.get('window');
	
  return (
    <BottomTabBar
      {...props}
      labelStyle={style.label}
      activeTintColor={props.theme.secondaryColor}
      inactiveTintColor={props.theme.color}
    />
  );
};

const style = StyleSheet.create({
  label: { fontSize: 22, fontWeight: '400',},
});

export default withTheme(TabBar);
