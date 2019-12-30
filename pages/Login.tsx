// Main.js
import React from 'react';
import { StyleSheet } from 'react-native';

import ScreenArea from '../src/components/ScreenArea';
import { UserAuthentication } from '../src/features/UserAuthentication';

import { withTheme } from '../src/with/theme'

type LoginProps = {
  navigation?: any,
  theme?: any
}

const Login = (props: LoginProps) => {

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
