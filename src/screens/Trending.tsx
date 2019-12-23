// Main.js
import React, {useState, useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBox from '../components/SearchBox';
import TrendingList from '../features/Trending/TrendingList';
import ScreenArea from '../components/ScreenArea';

import { firestore, storage } from '../utils'
import { withTheme } from '../theme'

const Trending = (props) => {

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
            img: storage.ref(data.img)
        }
      });

      setPosts(postCollection);
    })
  .catch(err => {
    console.log('Error getting documents', err);
  });
},[]);

  


  return (
    <ScreenArea backgroundColor='#000'>
    <View style={[style.container, { backgroundColor: 'rgba(255,255,255,0)',  marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0}]}>
	    <View style={[style.container, {marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0}]}>
          <SearchBox />
		      <TrendingList posts={posts} />
      </View>
    </View>
    </ScreenArea>
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

/*
const Trending = (props) => {
  return (
    <ScreenArea backgroundColor='#000'>
    <ScrollView style={{flex: 1,  marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0, width: '100%', height: "90%"}}>
      <View style={[style.container, { backgroundColor: 'rgba(255,255,255,0)',  marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0}]}>
          <SearchBox />
	      <View style={[style.container, {marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0}]}>
		      <TrendingList />
	      </View>
      </View>
    </ScrollView>
    </ScreenArea>
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
*/

export default withTheme(Trending);
