// TabBar.js
import React, {forwardRef} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import { withTheme } from '../with/theme';

const IconTextBox = React.forwardRef((props, ref) => {
	
  return (
    <View style={{ backgroundColor: 'rgba(0,0,0,0)', width: props.width||'80%', marginTop: 5, marginBottom: 5 }}>
		<View
			style={{
				backgroundColor: 'rgba(0,0,0,0)',
				justifyContent: 'center',
				paddingHorizontal: 5,
                borderRadius: 10, 
                borderColor: props.borderColor || "#bbbbbb",
				borderWidth: 1
				}}>
			<View
				style={{
     			flexDirection: 'row',
     			padding: 5,
				 alignItems: 'center'
   			}}>
				<Icon name={props.icon || "search"} style={{ fontSize: 15, padding: 5, paddingRight:10 }} />
				<TextInput ref={ref} onKeyPress={onKeyPress} onChangeText={props.onChangeText}
						 placeholder={props.placeholder || "Enter search"} secureTextEntry={props.password || false} style={{ fontSize:12, width: "80%", height: 32 }} />
			</View>
		</View>
	</View>
  );
});

export default withTheme(IconTextBox);
