// Main.js
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import ScreenArea from '../components/ScreenArea';
import Button from '../components/Button';
import IconTextBox from '../components/IconTextBox';

import { withTheme } from '../with/theme'

import { auth } from '../utils'


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
      <Text style={[style.text, { color: props.theme.color, fontSize: 22, marginBottom: 20}]}>Settings</Text>
		    <View style={style.container2}> 
          <View style={{width: "65%"}}>  
              <Button icon="bell" width={myWidth} iconColor="#ffaa22" bold={true}>Notifications</Button>
              <Button icon="lock" width={myWidth} iconColor="#ffaa22" bold={true}>Privacy</Button>
              <Button icon="user" width={myWidth} iconColor="#ffaa22" bold={true}>Account</Button>
              <Button icon="award" width={myWidth} iconColor="#ffaa22" bold={true}>Feedback</Button>
          </View>
          <View style={{ width: "65%", marginTop: 50}}>  
              <Button icon="info" width={myWidth} iconColor="#ffaa22" bold={true}>About</Button>
              <Button onPress={SignIn} icon="log-out" width={myWidth} iconColor="#ffaa22" bold={true}>Logout</Button>
          </View>
         
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
    width: 300,
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});

export default withTheme(Login);
