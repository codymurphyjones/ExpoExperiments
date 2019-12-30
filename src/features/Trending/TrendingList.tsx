// TabBar.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import TrendPost from './TrendPost'

import { withTheme } from '../../with/theme';

type TrendingListProps = {
  posts?: any
}

const TrendingList = (props: TrendingListProps) => {
	const listItems = Object.keys(props.posts).map((id) => {
    let data = props.posts[id];

    return (
      <TrendPost key={id} src={data.img} textColor="#fff" ticker={data.ticker}>{data.body}</TrendPost>
    );
  }
  );
  return (
		<View style={style.container}>
      <View style={[style.container, { alignSelf: "stretch" }]}>
			  {listItems}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
	  marginTop: 10,
    maxWidth: 650
  }
});

/*
<View style={style.container}>
      <View style={[style.container, { alignSelf: "stretch" }]}>
			  <TrendPost src={require('../../assets/tim-cook.jpeg')} textColor="#fff" ticker="AAPL">This is my posting about my opinion on this stock, I'm not saying its a fact its just a thought</TrendPost>
			  <TrendPost src={require('../../assets/microsoft.jpg')} textColor="#fff" ticker="MSFT">This is my posting about my opinion on this stock, I'm not saying its a fact its just a thought</TrendPost>
			  <TrendPost src={require('../../assets/elon_musk.jpg')} textColor="#fff" ticker="TSLA">This is my posting about my opinion on this stock, I'm not saying its a fact its just a thought</TrendPost>
      </View>
    </View>
    */

export default withTheme(TrendingList);
