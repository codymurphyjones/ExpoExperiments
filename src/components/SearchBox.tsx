// TabBar.js
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import { withTheme } from '../with/theme';

const SearchBox = props => {
	
  return (
    <View style={{ flex: 1, paddingTop: 15, backgroundColor: 'rgba(0,0,0,0)' }}>
		<View
			style={{
				backgroundColor: '#EEE',
				justifyContent: 'center',
				paddingHorizontal: 5,
				borderRadius: 10		
				}}>
			<View
				style={{
     			flexDirection: 'row',
     			padding: 5,
     			alignItems: 'center'
   			}}>
				<Icon name="search" style={{ fontSize: 15, padding: 5, paddingRight:10 }} />
				<TextInput placeholder="Search Ticker or Investor"  style={{ fontSize:18, width: "80%" }} />
			</View>
		</View>
	</View>
  );
};

export default withTheme(SearchBox);
