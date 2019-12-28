// Main.js
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import ScreenArea from '@Components/ScreenArea';
import Button from '@Components/Button';
import IconTextBox from '@Components/IconTextBox';

import { withTheme } from '@with/theme'

import { auth } from '@utils'

import Settings from '@Features/Settings/Settings'


const Login = (props) => {

  useEffect(() => {
    auth.onAuthStateChanged(function(user) {
        if (user) {
          
        } else {
          props.navigation.navigate("AuthLoading") 
        }
    });
  }, [])

    let myWidth = "100%"

    let SignIn = () => { auth.signOut().then(function() {
  }); };


  return (
    <ScreenArea backgroundColor={props.theme.backgroundColor}>
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

export default withTheme(Login);
