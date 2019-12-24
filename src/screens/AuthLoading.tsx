// Main.js
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import ScreenArea from '../components/ScreenArea';
import Button from '../components/Button';
import IconTextBox from '../components/IconTextBox';

import { withTheme } from '../theme'

import { auth } from '../utils'

const setAsyncTimeout = (cb, timeout = 0) => new Promise(resolve => {
  setTimeout(
			() => {
					cb();
					resolve();
				}, 
			timeout);
	});


const Login = (props) => {
    console.log("Auth Loading");

    useEffect(() => {
      auth.onAuthStateChanged(function(user) {
          if (user) {
              var uid = user.uid;
              var providerData = user.providerData;
              console.log("onAuth Login Change")
              props.navigation.navigate("App") 
          } else {
              console.log("onAuth Logout Change")
              console.log("Logged out on AuthLoading")
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
