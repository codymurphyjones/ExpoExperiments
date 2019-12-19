// TabBar.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { withTheme } from './theme';

const Ticker = props => {
	
  return (
    <View
    style={{
        justifyContent: 'center',
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        margin: 10,
        borderWidth: 2,
        borderColor: props.color,
        borderRadius:5
    }}>
    <Text style={{color: props.color, fontSize: 18}}>{props.children}</Text>
</View>
  );
};

export default withTheme(Ticker);
