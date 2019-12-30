// TabBar.js
import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';
import Ticker from '../../components/Ticker'

import { withTheme } from '../../with/theme';

type PostingProps = {
	ticker?: string,
	children?: React.ReactNode
  }

const Posting = (props: PostingProps) => {
	
  return (
    <View style={style.container}>	
		<View style={[style.container, { borderWidth: 0, marginBottom: 5 }]}>
			<View style={style.head}>
				<Ticker>{props.ticker}</Ticker>
			</View>
			<View style={style.content}>
				<Text>{props.children}</Text>
			</View>
		</View>
		<View style={style.bottom}>
			<Icon name="thumbs-up" style={{ fontSize: 15, padding: 5, paddingRight:10 }} />
			<Icon name="thumbs-down" style={{ fontSize: 15, padding: 5, paddingRight:10 }} />
		</View>
	</View>
  );
};

const style = StyleSheet.create({
  container: {
	margin: 5,
	marginBottom: 15,
	alignItems: 'center',
	justifyContent: 'space-between',
	borderColor: '#dedede',
	borderWidth: 2,
	borderRadius: 5,
	width: '90%'
  },
  content: {
	flex: 1,
	margin: 5,
	minHeight: 130,
	alignSelf: 'stretch',
	alignItems: 'center',
	justifyContent: 'center'
  },
  head: {
	flex: 1,
	margin: 5,
	alignSelf: 'stretch',
	alignItems: 'center',
	flexDirection: 'row',
	justifyContent: 'space-around'
  },
  bottom: {
	flex: 1,
	margin: 5,
	marginBottom: 10,
	alignSelf: 'stretch',
	alignItems: 'center',
	flexDirection: 'row',
	justifyContent: 'space-around'
  }
});

export default withTheme(Posting);
