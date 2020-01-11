// TabBar.js
import React, {useState} from 'react';
import { View, StyleSheet, Text, Image, TouchableHighlight } from 'react-native';
import { withTheme } from 'With/theme';
import Button from './Button';

type ProfileAvatarProps = {
	uri?: string
  }



const ProfileAvatar = (props: ProfileAvatarProps) => {
	console.log(props.uri)
	
  return (
    	<View style={{ flex: 1,flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingTop: 10, width: '100%', }}>
			<Button padding={2} color="green">New</Button>
			<View
				style={{
					justifyContent: 'center',
					borderRadius: 35
			}}>
				<Image style={styles.stretch}  source={{uri: props.uri}}  />
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
	borderRadius: 35,
	backgroundColor: 'red'
  }
});


export default withTheme(ProfileAvatar);
