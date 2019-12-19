// TabBar.js
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import { withTheme } from './theme';

const UserAccountDetails = props => {
	
  return (
    <View style={style.container}>
		<Text style={{fontWeight: 'bold'}}>Michael Griffin</Text>
		<Text style={{color: "#a0a0a0"}}>United States</Text>
		
		<Text style={{paddingTop: 20, fontSize: 16}}>Investing since 18, invest don't trade</Text>
		<View style={[style.container, { backgroundColor: props.theme.backgroundColor, flexDirection: 'row' , justifyContent: 'space-between'}]}>
				<View style={style.vertical}>
					<Text>36</Text>
					<Text>Following</Text>
				</View>
				<Text style={{fontSize: 25}}>|</Text>
				<View style={style.vertical}>
					<Text>18k</Text>
					<Text>Followers</Text>
				</View>
				<Text style={{fontSize: 25}}>|</Text>
				<View style={style.vertical}>
					<Text>23</Text>
					<Text>Tickers</Text>
				</View>
		</View>
	</View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
	paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
	alignSelf: 'stretch',
  },
  vertical: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
	flexDirection: 'row'
  },
  text: {
    fontWeight: 'bold',
  },
});

export default withTheme(UserAccountDetails);
