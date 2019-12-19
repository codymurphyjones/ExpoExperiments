// Main.js
import React from 'react';
import { View, Text, StyleSheet,SafeAreaView, ScrollView } from 'react-native';
import SearchBox from '../src/SearchBox';
import StreetList from '../src/Street/StreetList';

import { withTheme } from '../src/theme'

const Main = (props) => {
  return (
    <SafeAreaView style={{flex: 1, marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0, paddingTop: 10, backgroundColor: props.theme.backgroundColor}}>
    <ScrollView style={{flex: 1,  marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0, width: '100%'}}>
    <View style={[style.container, { backgroundColor: 'rgba(255,255,255,0)',  marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0}]}>
	    <View style={[style.container, {marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0}]}>
        <SearchBox />
        <Text style={[style.text, { color: props.theme.color, fontSize: 22, marginTop: 25 }]}>Street</Text>
		    <StreetList />
	    </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});

export default withTheme(Main);
