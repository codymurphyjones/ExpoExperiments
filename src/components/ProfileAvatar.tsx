// TabBar.js
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, StyleSheet, Image, Text, TouchableHighlight } from 'react-native';
import { withTheme } from '../theme';
import Button from './Button';

const utton = props => {
	let onPressDefault = () => {
		console.log("Button was pressed");
	  }
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
	<TouchableHighlight onPress={props.onPress || onPressDefault}>
    	<Text style={{color: props.color}}>{props.children}</Text>
	</TouchableHighlight>
</View>
  );
};



const ProfileAvatar = props => {
	
  return (
    <View style={{ flex: 1,flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingTop: 10, width: '100%'}}>
		<Button padding={2} color="green">New</Button>
		<View
			style={{
				justifyContent: 'center',
				borderRadius: 35
		}}>
			<Image style={styles.stretch} source={require('../../assets/avatar.png')} ></Image>
		</View>

		<Button padding={2}  color="#f59d0c">Followed</Button>
	</View>
  );
};

const styles = StyleSheet.create({
  stretch: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
	borderRadius: 35
  }
});


export default withTheme(ProfileAvatar);
