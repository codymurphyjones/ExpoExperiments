// Main.js
import React, {useState, useEffect, useRef, forwardRef} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Button from 'Components/Button';
import IconTextBox from 'Components/IconTextBox';

import {emailValidate, passwordValidate} from './validations';
import HiddenIconTextBox from './HiddenIconTextBox';

import { withTheme, ThemePropTypes} from 'With/theme'


type UserInformationProps = {
  navigation?: any,
  theme?: ThemePropTypes,
  isSignIn?: boolean,
  isPass?: any,
  submit?(): void,
  password: any,
  confirm: any,
  email: any,
  name: any,
  canSubmit: any,
  submitval: any
}


const UserRegistration = (props: UserInformationProps) => {
  const passwordBox = useRef(null);
  const emailBox = useRef(null);
  const confirmpasswordBox = useRef(null);

  const [password,setPassword] = props.password;
  const [confirm,setConfirm] = props.confirm;
  const [email,setEmail] = props.email;
  const [handle,setHandle] = props.name;
  const [isPass,setIsPass] = props.isPass;

 

  const [isEmail,setIsEmail] = useState(false);
  
  const [isConfirm,setIsConfirm] = useState(false);

  useEffect(() => {
    if(handle.length < 3  || !isEmail || email.length < 3 || !isPass || password.length < 3 || !isConfirm || confirm.length < 3) {
        props.canSubmit(false);
    }
    else
        props.canSubmit(true)

   },[password,handle,email, confirm])

  
  return (	
    <View style={style.container}>
              <IconTextBox onSubmit={() => {emailBox.current.focus()}} borderColor={(handle.length < 3 ) ? "red" : "#bbb"}  onChangeText={text => { setHandle(text) }} icon="triangle" placeholder="Full Name" width="100%" />
              <IconTextBox ref={emailBox} onSubmit={() => {passwordBox.current.focus()}} borderColor={(!isEmail || email.length < 3) ? "red" : "#bbb"} onChangeText={text => { setEmail(text); setIsEmail(emailValidate(text)); }} width="100%" icon="user" placeholder="Email address"  />
              <IconTextBox ref={passwordBox} onSubmit={() => { confirmpasswordBox.current.focus()}} borderColor={(!isPass  && password.length < 6) ? "red" : "#bbb"} onChangeText={text => { setPassword(text); setIsPass(passwordValidate(text,confirm)); setIsConfirm(text === confirm && isPass); }}width="100%" icon="lock" placeholder="Password" password={true}  />
              <IconTextBox ref={confirmpasswordBox} onSubmit={() => {}}  borderColor={(!isConfirm || confirm.length < 6) ? "red" : "#bbb"} onChangeText={text => { setConfirm(text); setIsPass(passwordValidate(text,password)); setIsConfirm(password === text); }} icon="shield" placeholder="Confirm password" password={true} width="100%" />
              
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

export default withTheme(UserRegistration);

