// TabBar.js
import React, {useState, useMemo} from 'react';
import { View, StyleSheet, Image, Text, TouchableHighlight } from 'react-native';
import { withTheme } from '$with/theme';
import Button from './Button';

type ProfileAvatarProps = {
	uri?: string
  }



const ProfileAvatar = (props: ProfileAvatarProps) => {
	const [visisble,setVisible] = useState(true);

  return useMemo(() => (
    	<View style={{ flex: 1,flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingTop: 10, width: '100%', }}>
			<Button padding={2} color="green">New</Button>
			<View
				style={{
					justifyContent: 'center',
					borderRadius: 35
			}}>
				<Image onLoadStart={(e) => setVisible(false)} onLoadEnd={(e) => setVisible(true)} style={styles.stretch} source={{uri: props.uri}}  ></Image>
			</View>

			<Button padding={2}  color="#f59d0c">Followed</Button>
		</View>
  ), [visisble, props.uri]);
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
