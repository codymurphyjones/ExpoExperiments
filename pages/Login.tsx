// Main.js
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import ScreenArea from '@Components/ScreenArea';
import Button from '@Components/Button';
import IconTextBox from '@Components/IconTextBox';
import { UserAuthentication } from '@Features/UserAuthentication';

import { withTheme } from '@with/theme'

//

const Login = (props) => {

  let SignIn = () => { props.navigation.navigate("AuthLoading") };

  return (
    <ScreenArea backgroundColor={props.theme.backgroundColor || "#fff"}>
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
