// TabBar.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Ticker from '../Ticker'
import { withTheme } from '../theme';

const StreetAvatar = props => {
	
  return (
    <View style={{ flex: 1, width: '100%', flexDirection: 'row', alignItems: 'center', paddingTop: 10, justifyContent: 'space-around'}}>
		<Ticker color={props.color}>{props.ticker}</Ticker>
		<View
			style={{
				justifyContent: 'center',
				borderRadius: 30,
                width: 70,
                flex: 1,
                alignItems: 'center',
                alignSelf: 'center'
		}}>
			<Image style={styles.stretch} source={props.src} ></Image>
            <Text style={{color: props.color, fontWeight: 'bold', marginTop: 15}}>{props.name}</Text>
		</View>
		<Text style={{color: props.color, width: 80}}>2 mins ago</Text>
	</View>
  );
};

const styles = StyleSheet.create({
  stretch: {
    width: 70,
    height: 70,
    resizeMode: 'stretch',
	borderRadius: 30
  }
});


export default withTheme(StreetAvatar);
