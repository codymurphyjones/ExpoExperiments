// Main.js
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBox from 'Components/SearchBox';
import StreetList from 'Features/Street/StreetList';
import ScreenArea from 'Components/ScreenArea';
import Button from 'Components/Button'

import { withTheme } from 'With/theme'

import { auth } from 'Utils'

/*
type MainProps = {
  navigation?: any,
  theme?: any
}*/

const Main = (props) => {
  
  useEffect(() => {

  },[props.theme.secondaryColor])

  return (
    <ScreenArea backgroundColor="#fff">
    <View style={[style.container, { backgroundColor: 'rgba(255,255,255,0)',  marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0, height: '100%', width: '100%'}]}>
	    <View style={[style.container, {marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0,alignItems: 'center',
    justifyContent: 'center'}]}>
        
        <Text style={[style.text, { color: props.theme.color, fontSize: 22, marginTop: 25 }]}>Thank you for Registering!</Text>
        <Text style={[style.text, { color: props.theme.color, fontSize: 22, marginTop: 25 }]}>We are excited to release our app!</Text>
        <Text style={[style.text, { color: props.theme.color, fontSize: 22, marginTop: 25 }]}>Stay tuned for details!</Text>

        <Button padding={2} color={props.theme.secondaryColor} onPress={() => {
          auth.signOut().then(function() {
            props.navigation.navigate("Auth");
          });
          
        }}> Logout</Button>
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

export default withTheme(Main);
