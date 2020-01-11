// TabBar.js
import React, {useState} from 'react';
import { View, StyleSheet, Text, Image, TouchableHighlight } from 'react-native';
import FastImage from "./FastImage"
import { withTheme } from 'With/theme';
import Button from './Button';

type ProfileAvatarProps = {
	uri?: string
  }



const ProfileAvatar = (props: ProfileAvatarProps) => {
	
  return (
    	<View style={{ flex: 1,flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingTop: 10, width: '100%', }}>
			<Button padding={2} color="green">New</Button>
			<View
				style={{
					justifyContent: 'center',
					borderRadius: 35
			}}>
				<FastImage style={styles.stretch} test={styles.stretch}  source={{uri: props.uri}}  />
			</View>

			<Button padding={2}  color="#f59d0c">Followed</Button>
		</View>
  );
};

const styles = {
  stretch: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
	borderRadius: 35,
	backgroundColor: 'red'
  }
};


export default withTheme(ProfileAvatar);
