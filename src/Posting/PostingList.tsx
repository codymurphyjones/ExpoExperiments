// TabBar.js
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Posting from './Posting'

import { withTheme } from '../theme';

const PostingList = props => {
	
  return (
    <View style={style.container}>
		<View style={{borderColor: '#fce1ab', borderWidth: 2, alignSelf: 'stretch'}}></View>
		<Text style={{marginTop: -15, backgroundColor: props.theme.backgroundColor, padding: 5}}>TOP</Text>
		<View style={style.container}>
			<Posting ticker="MSFT">This is my posting about my opinion on this stock, I'm not saying its a fact its just a thought</Posting>
			<Posting ticker="MSFT">This is my posting about my opinion on this stock, I'm not saying its a fact its just a thought</Posting>
			<Posting ticker="MSFT">This is my posting about my opinion on this stock, I'm not saying its a fact its just a thought</Posting>
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
  }
});

export default withTheme(PostingList);
