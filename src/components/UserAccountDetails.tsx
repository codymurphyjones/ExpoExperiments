// TabBar.js
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import { withTheme } from '../with/theme';

type ProfileAvatarProps = {
	color?: string,
	children?: React.ReactNode,
	following?: number,
	followers?: number,
	tickers?: string,
	name?: string,
	location?: string
	}
  

const UserAccountDetails = props => {
	
  return (
    <View style={style.container}>
		<Text style={{fontWeight: 'bold'}}>{props.name}</Text>
		<Text style={{color: "#a0a0a0"}}>{props.location}</Text>
		
		<Text style={{paddingTop: 20, fontSize: 16}}>{props.bio}</Text>
		<View style={[style.container, { backgroundColor: props.theme.backgroundColor || "#fff", flexDirection: 'row' , justifyContent: 'space-between'}]}>
				<View style={style.vertical}>
					<Text>{props.following}</Text>
					<Text>Following</Text>
				</View>
				<Text style={{fontSize: 25}}>|</Text>
				<View style={style.vertical}>
					<Text>{props.followers}</Text>
					<Text>Followers</Text>
				</View>
				<Text style={{fontSize: 25}}>|</Text>
				<View style={style.vertical}>
					<Text>{props.tickers}</Text>
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
