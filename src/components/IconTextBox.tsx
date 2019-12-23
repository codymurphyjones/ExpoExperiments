// TabBar.js
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import { withTheme } from '../theme';

const IconTextBox = props => {
	
  return (
    <View style={{ backgroundColor: 'rgba(0,0,0,0)', width: props.width||'80%', marginTop: 10 }}>
		<View
			style={{
				backgroundColor: 'rgba(0,0,0,0)',
				justifyContent: 'center',
				paddingHorizontal: 5,
                borderRadius: 10, 
                borderColor: "#bbbbbb",
				borderWidth: "1px"
				}}>
			<View
				style={{
     			flexDirection: 'row',
     			padding: 5,
				 alignItems: 'center'
   			}}>
				<Icon name={props.icon || "search"} style={{ fontSize: 15, padding: 5, paddingRight:10 }} />
				<TextInput placeholder={props.placeholder || "Enter search"} secureTextEntry={props.password || false} style={props.textStyle || { fontSize:12, width: "80%" }} />
			</View>
		</View>
	</View>
  );
};

export default withTheme(IconTextBox);