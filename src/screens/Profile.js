// Main.js
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBox from 'Components/SearchBox';
import ProfileAvatar from 'Components/ProfileAvatar';
import UserAccountDetails from 'Components/UserAccountDetails';
import PostingList from 'Features/Posting/PostingList';
import ScreenArea from 'Components/ScreenArea';

import { withTheme } from 'With/theme'
import {withUser} from "With/user"

import { firestore, storage } from 'Utils'

/*
type ProfileScreenProps = {
  navigation?: any,
  theme?: any,
  setUser?: any,
  User?: any
}*/

const ProfileScreen = (props) => {
  let userDB;;
  let postDB = firestore.collection("posts");

  //userdata
  const [name,setName] = useState("");
  const [bio,setBio] = useState("");
  const [location,setLocation] = useState("United States");
  const [following,setFollowing] = useState("");
  const [follower,setFollower] = useState("");
  const [tickers,setTickers] = useState("");
  const [image,setImage] = useState("./");

  //postings
  const [posts,setPosts] = useState({});


useEffect(() => { 
  
  if(props.User.isLoaded) {
      setName(props.User.name)
      setLocation(props.User.location)
      setBio(props.User.bio);
      setFollowing(props.User.following);
      setFollower(props.User.followers);
      setTickers(props.User.tickers);
      setImage(props.User.profileUrl)

   
      let query = postDB.where('User','==',firestore.collection("UserData").doc(props.User.uid)).get()
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
			  }
			});
			
			setPosts(postCollection);
		  })
		.catch(err => {
		  
		});

  }
      
},[props.User]);





  return (
    <ScreenArea backgroundColor="#fff">
    <View style={[style.container, { backgroundColor: "#fff", paddingTop: 20 }]}>
	    <View style={style.container}>
        <SearchBox />
        <Text style={[style.text, { color: props.theme.color, fontSize: 22, marginTop: 25 }]}>Profile</Text>
        <ProfileAvatar uri={image != "/." ? image: "../../assets/avatar.png"}  />
		    
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

export default withTheme(withUser(ProfileScreen));
