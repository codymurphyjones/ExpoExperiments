// Main.js
import React from 'react';
import { StyleSheet } from 'react-native';

import ScreenArea from 'Components/ScreenArea';
import { UserAuthentication } from 'Features/UserAuthentication';

import { withTheme } from 'With/theme'

/*
type LoginProps = {
  navigation?: any,
  theme?: any
}*/

const Login = (props) => {

  let SignIn = () => { props.navigation.navigate("AuthLoading") };

  return (
    <ScreenArea backgroundColor="#fff">
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
