// Main.js
import React from 'react';
import { View, Text, StyleSheet,SafeAreaView, ScrollView } from 'react-native';
import SearchBox from '../src/SearchBox';
import TrendingList from '../src/Trending/TrendingList';

import { withTheme } from '../src/theme'
/*
<Text style={[style.text, { color: props.theme.color, fontSize: 22, marginTop: 25 }]}>Trending</Text>
*/

const Trending = (props) => {
  return (
    <SafeAreaView style={{flex: 1, width: '100%', marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0, backgroundColor: '#000'}}>
    <ScrollView style={{flex: 1,  marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0, width: '100%'}}>
    <View style={[style.container, { backgroundColor: 'rgba(255,255,255,0)',  marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0}]}>
	    <View style={[style.container, {marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0}]}>
        <SearchBox />
        
		<TrendingList />
	    </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
	width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});

export default withTheme(Trending);
