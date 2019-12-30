// TabBar.js
import React, {forwardRef} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import { withTheme } from '../with/theme';

type IconTextBoxProps = {
	width?: number,
	show?: boolean,
	onSubmit?(): void,
	onChangeText?(): void,
	icon?: string,
	placeholder?: string,
	password?: boolean,
	borderColor?: string
  }

  

const IconTextBox = React.forwardRef(({
	password,placeholder,width,borderColor,icon,onSubmit,onChangeText
  }: IconTextBoxProps, ref) => {

	function onSubmitEditing(e) {
			onSubmit();		
	}
	
  return (
    <View style={{ backgroundColor: 'rgba(0,0,0,0)', width: width||'80%', marginTop: 5, marginBottom: 5 }}>
		<View
			style={{
				backgroundColor: 'rgba(0,0,0,0)',
				justifyContent: 'center',
				paddingHorizontal: 5,
                borderRadius: 10, 
                borderColor: borderColor || "#bbbbbb",
				borderWidth: 1
				}}>
			<View
				style={{
     			flexDirection: 'row',
     			padding: 5,
				 alignItems: 'center'
   			}}>
				<Icon name={icon || "search"} style={{ fontSize: 15, padding: 5, paddingRight:10 }} />
				<TextInput ref={ref} onSubmitEditing={onSubmit} onChangeText={onChangeText}
						 placeholder={placeholder || "Enter search"} secureTextEntry={password || false} style={{ fontSize:12, width: "80%", height: 32 }} />
			</View>
		</View>
	</View>
  );
});

export default withTheme(IconTextBox);
