// TabBar.js
import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Posting from './Posting'
import { firestore, storage } from "../../utils/firebase"

import { withTheme, ThemePropTypes } from '../../with/theme';

type PostingListProps = {
  posts?: any,
  theme?: ThemePropTypes
  }

const PostingList = (props: PostingListProps) => {

const listItems = Object.keys(props.posts).map((id) => {
    let data = props.posts[id];

    return (
      <Posting key={id} ticker={data.ticker}>{data.body}</Posting>
    );
  }
  );
	
  return (
    <View style={style.container}>
		<View style={{borderColor: '#fce1ab', borderWidth: 2, alignSelf: 'stretch'}}></View>
    <View style={{marginTop: -17, backgroundColor: props.theme.backgroundColor || "#fff", padding: 5}}>
		<Text>TOP</Text></View>
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