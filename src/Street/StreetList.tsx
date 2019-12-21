// TabBar.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import StreetPost from './StreetPost'

import { withTheme } from '../theme';

const TrendingList = props => {
  const listItems = Object.keys(props.posts).map((id) => {
    let data = props.posts[id];
    return (
      <StreetPost key={id} user={data.user} name="Kyle Myers" textColor="#000" ticker={data.ticker} src={data.profile}>{data.body}</StreetPost>
    );
  }
  );
	
  return (
		<View style={style.container}>
		  {listItems}
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
  }
});

export default withTheme(TrendingList);

/*
<View style={style.container}>
			<StreetPost count={7} name="Kyle Myers" textColor="#000" ticker="AAPL" src={require('../../assets/avatars/firstavatar.png')}>This is my posting about my opinion on this stock, I'm not saying its a fact its just a thought</StreetPost>
			<StreetPost count={32} name="Fraces Fuller" textColor="#000" ticker="MSFT" src={require('../../assets/avatars/2avatar.png')}>This is my posting about my opinion on this stock, I'm not saying its a fact its just a thought</StreetPost>
			<StreetPost count={2} name="Cody Jones"  textColor="#000" ticker="TSLA" src={require('../../assets/avatar.png')}>This is my posting about my opinion on this stock, I'm not saying its a fact its just a thought</StreetPost>
    </View>
    */