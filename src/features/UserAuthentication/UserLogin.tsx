// Main.js
import React, {useState, useEffect, useRef, forwardRef} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Button from 'Components/Button';
import IconTextBox from 'Components/IconTextBox';

import {emailValidate, passwordValidate} from './validations';
import HiddenIconTextBox from './HiddenIconTextBox';

import { withTheme, ThemePropTypes} from 'With/theme'


type UserLoginProps = {
  navigation?: any,
  theme?: ThemePropTypes,
  isSignIn?: boolean,
  isPass?: any,
  submit?(): void,
  password: any,
  confirm: any,
  email: any,
  handle: any
}


const UserLogin = (props: UserLoginProps) => {
  const passwordBox = useRef(null);
  //Toggle SignIn/SignUp
  //Handle
  
  //passwords
  const [password,setPassword] = props.password;
  const [email,setEmail] = props.email;
  //email
 

  const [isEmail,setIsEmail] = useState(true);
	
  return (	
    <View style={style.container}>
              <IconTextBox onSubmit={() => {passwordBox.current.focus()}} borderColor={"#bbb"} onChangeText={text => { setEmail(text); }} width="100%" icon="user" placeholder="Email address"  />
              <IconTextBox ref={passwordBox} onSubmit={props.submit} borderColor={"#bbb"} onChangeText={text => { setPassword(text);}}width="100%" icon="lock" placeholder="Password" password={true}  />
      </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    width: 300,
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});

export default withTheme(UserLogin);
