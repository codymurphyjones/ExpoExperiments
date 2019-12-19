// TabBar.js
import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ticker from '../Ticker'
import TickerTrend from './TickerTrend'
import { withTheme } from '../theme';

const TrendPost = props => {
	
  return (	
    <ImageBackground source={props.src} style={[style.container, { backgroundColor: 'red' }]}>
		<View style={style.overlay} />	
		<View style={[style.container, { borderBottomWidth: 0 }]}>
			<View style={style.head}>
				<Ticker color={props.textColor}>{props.ticker}</Ticker>
				<TickerTrend ticker={props.ticker} color={props.textColor}></TickerTrend>
			</View>
			<View style={style.content}>
				<Text style={{ color: props.textColor}}>{props.children}</Text>
			</View>
		</View>
		<View style={style.bottom}>
			<Icon name="thumbs-up" style={{ color: props.textColor,fontSize: 15, padding: 5, paddingRight:10 }} />
			<Icon name="thumbs-down" style={{ color: props.textColor,fontSize: 15, padding: 5, paddingRight:10 }} />
		</View>
	</ImageBackground>
  );
};

const style = StyleSheet.create({
  container: {
	alignSelf: 'stretch',
	alignItems: 'center',
	justifyContent: 'space-between',
	borderColor: '#fce1ab',
	borderBottomWidth: 3
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
	justifyContent: 'space-around'
  },
  bottom: {
	flex: 1,
	margin: 5,
	alignSelf: 'stretch',
	alignItems: 'center',
	flexDirection: 'row',
	justifyContent: 'space-around'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.6)',
  }
});

export default withTheme(TrendPost);
