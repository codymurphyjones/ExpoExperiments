// Main.js
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBox from '../components/SearchBox';
import StreetList from '../features/Street/StreetList';
import ScreenArea from '../components/ScreenArea';

import { withTheme } from '../with/theme'

import { firestore } from '../utils'

type MainProps = {
  navigation?: any,
  theme?: any
}

const Main = (props: MainProps) => {
  let postDB = firestore.collection("posts");
  let myPost = {}
  const [posts,setPosts] = useState(props.navigation.getParam('postings',{}));



  return (
    <ScreenArea backgroundColor={props.theme.backgroundColor}>
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
