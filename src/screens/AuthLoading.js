// Main.js
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import ScreenArea from 'Components/ScreenArea';

import { withTheme } from 'With/theme'
import {withUser} from 'With/user'


import { auth, firestore, storage } from 'Utils'

    /*
type AuthLoadingProps = {
  navigation?: any,
  theme?: any,
  setUser?: any,
  User?: any
}*/


const AuthLoading = (props) => {
    

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
  let query = userDB.get()
    .then(doc => {
        if (!doc.exists) {
          
          return;
        }  
        
        let data = doc.data();
        
        (async () => {
          await storage.ref(data.profile).getDownloadURL().then((url: string) => { 
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
      })();
        
    })
  .catch(err => {
   
  });
}

async function getUser(userDB) {

            getUserData(userDB.uid);
    }
  

  async function getData(userAuth) {
    
    await getUser(userAuth)
    let postings = await getPostDB();

    
   props.navigation.navigate("Home", { postings}) 
    
  }

  
    useEffect(() => {
      let unsubscribe = auth.onAuthStateChanged(function(userAuth) {
          if (userAuth) {
              var uid = userAuth.uid;
              var providerData = userAuth.providerData;

              getData(userAuth);
          } else {
              
              props.navigation.navigate("Auth") 
              
          }
      });
      
      return () => {
        unsubscribe();
      }
  }, [])


  
  
  return (
    <ScreenArea backgroundColor="#fff">
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
