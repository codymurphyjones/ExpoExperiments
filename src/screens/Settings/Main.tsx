// Main.js
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import ScreenArea from 'Components/ScreenArea';

import { withTheme } from 'With/theme'

import { auth } from 'Utils'

import Settings from 'Features/Settings/Settings'


type MainProps = {
  navigation?: any,
  theme?: any,
  isWebView?: boolean
}




const Main = (props) => {

  useEffect(() => {
    let unsubscribe = auth.onAuthStateChanged(function(userAuth) {
      if (!userAuth) {
          props.navigation.navigate("AuthLoading") 
      }
    });
    
    return () => {
      unsubscribe();
    }
}, [])

    let myWidth = "100%"

    let SignIn = () => { auth.signOut().then(function() {
  }); };


  return (
    <ScreenArea backgroundColor="#fff">
	    <View style={style.container}>
      
          <Settings isWebView={props.isWebView} />
         
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
    width: 300,
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});

export default withTheme(Main);
