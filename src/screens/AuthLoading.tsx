// Main.js
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import ScreenArea from '../components/ScreenArea';

import { withTheme } from '../with/theme'
import {withUser} from '../with/user'

import { auth, firestore, storage } from '../utils'

    
type AuthLoadingProps = {
  navigation?: any,
  theme?: any,
  setUser?: any,
  User?: any
}


const AuthLoading = (props: AuthLoadingProps) => {
    

  async function getPostDB() {
    let postDB = firestore.collection("posts");
    let postCollection = {};
    let query = await postDB.get()
      .then(snapshot => {
          if (snapshot.empty) {
            
            return;
          }  
          
          
          snapshot.forEach(doc => {
            let data = doc.data();
            postCollection[doc.id] = {
              id: doc.id,
              body: data.body,
              ticker: data.ticker,
              user: data.User
          }
        });
    })
  .catch(err => {
    
  });


  return postCollection;
}

async function getUserData(uid) {
  let userDB = firestore.collection("UserData").doc(uid);
  let query =  await userDB.get()
    .then(doc => {
        if (!doc.exists) {
          
          return;
        }  
        let data = doc.data();
    
        storage.ref(data.profile).getDownloadURL().then((url: string) => { 
          console.log(data.profile)
          let obj = {
            name: data.firstname + " " + data.lastname,
            location: data.location,
            bio: data.bio,
            following: data.following,
            followers: data.followers,
            tickers: data.tickers,
            profile: data.profile,
            profileUrl: url,
            uid: uid,
            isLoaded: true
          }
          
          props.setUser(obj); 
        });
        
    })
  .catch(err => {
   
  });
}

  

  async function getData(userAuth) {
    await getUserData(userAuth.uid)
    let postings = await getPostDB();
   props.navigation.navigate("Home", { postings}) 
    
  }

  
    useEffect(() => {
      auth.onAuthStateChanged(function(userAuth) {
          if (userAuth) {
              var uid = userAuth.uid;
              var providerData = userAuth.providerData;
              console.log("getData")
              getData(userAuth);
          } else {
              
              props.navigation.navigate("Auth") 
              
          }
      });
  })


  
  
  return (
    <ScreenArea backgroundColor={props.theme.backgroundColor}>
	    <View style={style.container}>
		    <View style={style.container2}> 
            <ActivityIndicator size="large" color="#ffaa22" />
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
    height: "100%"
  },
  container2: {
    height: 50,
    width: 50,
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});

export default withTheme(withUser(AuthLoading));
