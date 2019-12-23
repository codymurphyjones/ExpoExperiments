// Main.js
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import ScreenArea from '../components/ScreenArea';
import Button from '../components/Button';
import IconTextBox from '../components/IconTextBox';
import { UserAuthentication } from '../features/UserAuthentication';

import { withTheme } from '../theme'



const Login = (props) => {

  let SignIn = () => { props.navigation.navigate("App") };

  return (
    <ScreenArea backgroundColor={props.theme.backgroundColor}>
	    <UserAuthentication navigation={props.navigation} />
    
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
