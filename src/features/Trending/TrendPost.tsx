// TabBar.js
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Ticker from '../../components/Ticker'
import TickerTrend from './TickerTrend'
import { withTheme } from '../../with/theme';

type TrendPostProps = {
	src: any,
	textColor: string,
	ticker: string,
	children: React.ReactNode
  }
  

const TrendPost = (props: TrendPostProps) => {
	const [image,setImage] = useState("./");
	const [visisble,setVisible] = useState(true);

	useEffect(() => {
	props.src.getDownloadURL().then((url: string) => { setImage(url);  });
	}, []);
	
  return (	
    <ImageBackground source={{uri: image}} style={style.container}>
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
