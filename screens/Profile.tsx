// Main.js
import React from 'react';
import { View, Text, StyleSheet,SafeAreaView, ScrollView } from 'react-native';
import SearchBox from '../src/SearchBox';
import ProfileAvatar from '../src/ProfileAvatar';
import UserAccountDetails from '../src/UserAccountDetails';
import PostingList from '../src/Posting/PostingList';

import { withTheme } from '../src/theme'

const MainScreen = (props) => {
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 10}}>
    <ScrollView style={{flex: 1}}>
    <View style={[style.container, { backgroundColor: props.theme.backgroundColor, paddingTop: 20 }]}>
	    <View style={style.container}>
        <SearchBox />
        <Text style={[style.text, { color: props.theme.color, fontSize: 22, marginTop: 25 }]}>Profile</Text>
		    <ProfileAvatar />
		    <UserAccountDetails />
		    <PostingList />
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

export default withTheme(MainScreen);
