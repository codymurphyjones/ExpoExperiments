// TabBar.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { withTheme } from './theme';

const Button = props => {
	
  return (
    <View
    style={{
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: props.color,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        margin: 20,
		width: 80,
		alignItems: 'center'
}}>
    <Text style={{color: props.color}}>{props.children}</Text>
</View>
  );
};

export default withTheme(Button);
