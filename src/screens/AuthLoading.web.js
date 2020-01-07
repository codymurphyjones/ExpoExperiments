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

  
    useEffect(() => {
      let unsubscribe = auth.onAuthStateChanged(function(userAuth) {
          if (userAuth) {
            props.navigation.navigate("App") 
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
