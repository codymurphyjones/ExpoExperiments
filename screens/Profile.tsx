// Main.js
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBox from '../src/SearchBox';
import ProfileAvatar from '../src/ProfileAvatar';
import UserAccountDetails from '../src/UserAccountDetails';
import PostingList from '../src/Posting/PostingList';
import ScreenArea from './ScreenArea';

import { withTheme } from '../src/theme'

import { firestore, storage } from "../src/firebase"



const MainScreen = (props) => {
  let userDB = firestore.collection("UserData").doc("mager1794");
  let postDB = firestore.collection("posts");

  //userdata
  const [name,setName] = useState("");
  const [bio,setBio] = useState("");
  const [location,setLocation] = useState("United States");
  const [following,setFollowing] = useState("");
  const [follower,setFollower] = useState("");
  const [tickers,setTickers] = useState("");

  //postings
  const [posts,setPosts] = useState({});

  useEffect(() => {
  let query = userDB.get()
    .then(doc => {
        if (doc.empty) {
          console.log('No matching documents.');
          return;
        }  
        let data = doc.data();
        setName(data.firstname + " " + data.lastname)
        setLocation(data.location)
        setBio(data.bio);
        setFollowing(data.following);
        setFollower(data.followers);
        setTickers(data.tickers);
        console.log(data);
    })
  .catch(err => {
    console.log('Error getting documents', err);
  });
},[]);
  	

  

	  useEffect(() => {
		let query = postDB.where('User','==',userDB).get()
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
			  }
			});
			console.log(postCollection);
			setPosts(postCollection);
		  })
		.catch(err => {
		  console.log('Error getting documents', err);
		});
	  },[]);





  return (
    <ScreenArea backgroundColor={props.theme.backgroundColor}>
    <View style={[style.container, { backgroundColor: props.theme.backgroundColor, paddingTop: 20 }]}>
	    <View style={style.container}>
        <SearchBox />
        <Text style={[style.text, { color: props.theme.color, fontSize: 22, marginTop: 25 }]}>Profile</Text>
		    <ProfileAvatar  />
		    <UserAccountDetails bio={bio} location={location} name={name} following={following} followers={follower} tickers={tickers} />
		    <PostingList posts={posts} />
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

export default withTheme(MainScreen);
