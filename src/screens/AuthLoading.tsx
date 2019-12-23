// Main.js
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import ScreenArea from '../components/ScreenArea';
import Button from '../components/Button';
import IconTextBox from '../components/IconTextBox';

import { withTheme } from '../theme'

import { firestore } from '../utils'


const Login = (props) => {

  let SignIn = () => { props.navigation.navigate("Auth") };

  SignIn();

  return (
    <ScreenArea backgroundColor={props.theme.backgroundColor}>
	    <View style={style.container}>
		    <View style={style.container2}> 
          <View style={{width: 180, marginBottom: 60}}>  
              <Text style={[style.text, { margin: 0,color: props.theme.color, fontSize: 36, marginTop: 25 }]}>Welcome</Text>
              <Text style={[style.text, { marginTop: -10,color: '#ffaa22', fontSize: 32, fontWeight: 'bold' }]}>Sign in</Text>
          </View>
          <IconTextBox width="80%" icon="user" placeholder="Username"  />
          <IconTextBox width="80%" icon="lock" placeholder="Password" password={true}  />
          <View style={{alignItems: "center", width: "80%"}}>  
              <Button onPress={SignIn} width="100%" color="#ffaa22">Submit</Button>
              <Button onPress={SignIn} maxWidth={120} width="100%" color="#ffaa22" textColor="#000">Sign Up</Button>
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
    height: 400,
    width: 300,
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});

export default withTheme(Login);
