// TabBar.js
import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Posting from './Posting'
import { firestore, storage } from "../firebase"

import { withTheme } from '../theme';

const PostingList = props => {

const listItems = Object.keys(props.posts).map((id) => {
    let data = props.posts[id];

    return (
      <Posting key={id} ticker={data.ticker}>{data.body}</Posting>
    );
  }
  );

  console.log(props.posts);
	
  return (
    <View style={style.container}>
		<View style={{borderColor: '#fce1ab', borderWidth: 2, alignSelf: 'stretch'}}></View>
		<Text style={{marginTop: -15, backgroundColor: props.theme.backgroundColor, padding: 5}}>TOP</Text>
		<View style={style.container}>
			{listItems}
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