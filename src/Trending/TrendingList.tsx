// TabBar.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import TrendPost from './TrendPost'

import { withTheme } from '../theme';

const TrendingList = props => {
	
  return (
		<View style={style.container}>
			<TrendPost src={require('../../assets/tim-cook.jpeg')} textColor="#fff" ticker="AAPL">This is my posting about my opinion on this stock, I'm not saying its a fact its just a thought</TrendPost>
			<TrendPost src={require('../../assets/microsoft.jpg')} textColor="#fff" ticker="MSFT">This is my posting about my opinion on this stock, I'm not saying its a fact its just a thought</TrendPost>
			<TrendPost src={require('../../assets/elon_musk.jpg')} textColor="#fff" ticker="TSLA">This is my posting about my opinion on this stock, I'm not saying its a fact its just a thought</TrendPost>
		</View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  alignSelf: 'stretch',
  marginTop: 10
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

export default withTheme(TrendingList);
