// Main.js
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBox from '../src/components/SearchBox';
import StreetList from '../src/features/Street/StreetList';
import ScreenArea from '../src/components/ScreenArea';

import { withTheme } from '../src/with/theme'

import { firestore } from '../src/utils'

/*
type MainProps = {
  navigation?: any,
  theme?: any
}*/

const Main = (props) => {
  let postDB = firestore.collection("posts");
  let myPost = {}
  const [posts,setPosts] = useState(props.navigation.getParam('postings',{}));



  return (
    <ScreenArea backgroundColor="#fff">
    <View style={[style.container, { backgroundColor: 'rgba(255,255,255,0)',  marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0}]}>
	    <View style={[style.container, {marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0}]}>
        <SearchBox />
        <Text style={[style.text, { color: props.theme.color, fontSize: 22, marginTop: 25 }]}>Street</Text>
		    <StreetList posts={posts} />
	    </View>
    </View>
    </ScreenArea>
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
