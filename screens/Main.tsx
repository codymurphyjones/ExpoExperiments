// Main.js
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBox from '../src/SearchBox';
import StreetList from '../src/Street/StreetList';
import ScreenArea from './ScreenArea';

import { withTheme } from '../src/theme'
import {firestore} from "../src/firebase"


const Main = (props) => {
  let postDB = firestore.collection("posts");
  const [posts,setPosts] = useState({});

  useEffect(() => {
  let query = postDB.get()
    .then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }  

        let postCollection = {};
        snapshot.forEach(doc => {
          let data = doc.data();
          postCollection[doc.id] = {
            id: doc.id,
            body: data.body,
            ticker: data.ticker,
            user: data.User
        }
      });
      setPosts(postCollection);
    })
  .catch(err => {
    console.log('Error getting documents', err);
  });
},[]);



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
