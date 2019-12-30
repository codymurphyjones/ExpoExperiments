// Main.js
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import ScreenArea from '../../src/components/ScreenArea';

import { withTheme } from '../../src/with/theme'

import { auth } from '../../src/utils'

import Settings from '../../src/features/Settings/Settings'


type MainProps = {
  navigation?: any,
  theme?: any,
  isWebView?: boolean
}




const Main = (props) => {

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
    <ScreenArea backgroundColor={props.theme.backgroundColor || "#fff"}>
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
