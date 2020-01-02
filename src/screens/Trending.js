// Main.js
import React, {useState, useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBox from '../components/SearchBox';
import TrendingList from '../features/Trending/TrendingList';
import ScreenArea from '../components/ScreenArea';
import {AsyncStorage} from 'react-native';
import { firestore, storage } from '../utils'
import { withTheme } from '../with/theme'


const Trending = (props) => {

  let postDB = firestore.collection("trends");
  const [posts,setPosts] = useState({});

  useEffect(() => {
  let query = postDB.get()
    .then(snapshot => {
        if (snapshot.empty) {
          
          return;
        }  

        let postCollection = {};
        snapshot.forEach(doc => {
          let data = doc.data();
          postCollection[doc.id] = {
            id: doc.id,
            body: data.body,
            ticker: data.ticker,
            img: storage.ref(data.image)
        }
      });

      setPosts(postCollection);
    })
  .catch(err => {
    
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

export default withTheme(Trending);
