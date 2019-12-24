// Main.js
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import ScreenArea from '../components/ScreenArea';
import Button from '../components/Button';
import IconTextBox from '../components/IconTextBox';

import { withTheme } from '../theme'

import { auth, firestore } from '../utils'

function sleep(miliseconds) {
  var currentTime = new Date().getTime();

  while (currentTime + miliseconds >= new Date().getTime()) {
  }
}

const Login = (props) => {
    

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

  async function getData() {
    let postings = await getPostDB();
    
    props.navigation.navigate("Home", { postings}) 
    
  }

    useEffect(() => {
      auth.onAuthStateChanged(function(user) {
          if (user) {
              var uid = user.uid;
              var providerData = user.providerData;
              getData();
          } else {
              
              props.navigation.navigate("Auth") 
              
          }
      });
  }, [])
  
  
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

export default withTheme(Login);
