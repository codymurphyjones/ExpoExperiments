// Main.js
import React, {useState, useEffect, useRef, forwardRef} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Button from 'Components/Button';
import IconTextBox from 'Components/IconTextBox';

import {emailValidate, passwordValidate} from './validations';
import HiddenIconTextBox from './HiddenIconTextBox';

import { withTheme, ThemePropTypes} from 'With/theme'

import {firestore} from 'Utils/'



type UserInformationProps = {
  navigation?: any,
  theme?: ThemePropTypes,
  isSignIn?: boolean,
  isPass?: any,
  submit?(): void,
  password: any,
  confirm: any,
  email: any,
  handle: any,
  bio: any,
  year: any,
  location: any,
  canSubmit: any
}


const UserRegistration = (props: UserInformationProps) => {
  const passwordBox = useRef(null);
  const emailBox = useRef(null);
  const confirmpasswordBox = useRef(null);

  const [bio,setBio] = props.bio;
  const [year,setYear] = props.year;

  const [handle,setHandle] = props.handle;
  const [location,setLocation] = props.location;

  
  const [showError,setshowError] = useState(false);

  async function getHandles() {
    let userdata = firestore.collection("UserData").where("handle","==",handle);
    userdata.get().then(snapshot => {
      if (snapshot.empty) {
        setshowError(false)
        return;
      } 
      else
      {
        setshowError(true)
      }
    });
  }

  useEffect(() => {
    getHandles();
  
    if((handle.length < 3 ) || showError) {
        props.canSubmit(false);
    }
    else
        props.canSubmit(true)
        
   },[handle,showError])

	
  return (	
    <View style={style.container}>
              <Text style={{display: !showError ? 'none' : 'flex', color: 'red'}}>  Handle is already taken  </Text>
              <IconTextBox onSubmit={() => {emailBox.current.focus()}} borderColor={"#bbb"} onChangeText={text => { setHandle(text) }} icon="at-sign" width="100%" placeholder="Handle" />
              <IconTextBox ref={emailBox} onSubmit={() => {passwordBox.current.focus()}} borderColor={"#bbb"} onChangeText={text => { setYear(text); }} keyboardType='number-pad' width="100%" icon="calendar" placeholder="Birth Year"  />
              <IconTextBox ref={passwordBox} onSubmit={() => { confirmpasswordBox.current.focus()}} borderColor={"#bbb"} onChangeText={text => { setLocation(text) }}width="100%" icon="map-pin" placeholder="Location ex. United States,Texas, etc."   />
              <IconTextBox ref={confirmpasswordBox} onSubmit={() => {}}  borderColor={"#bbb"} onChangeText={text => { setBio(text) }} width="100%" icon="edit" placeholder="Bio"/>
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


/*
              <IconTextBox onSubmit={() => {emailBox.current.focus()}} show={!props.isSignIn} borderColor={(handle.length < 3 && !props.isSignIn) ? "red" : "#bbb"}  onChangeText={text => { setHandle(text) }} icon="at-sign" width="100%" placeholder="Handle" />
              <IconTextBox ref={emailBox} onSubmit={() => {passwordBox.current.focus()}} borderColor={(!isEmail && email.length < 3) ? "red" : "#bbb"} onChangeText={text => { setEmail(text); setIsEmail(emailValidate(text)) }} width="100%" icon="calendar" placeholder="Birth Year"  />
              <IconTextBox ref={passwordBox} onSubmit={() => { props.isSignIn ? props.submit() : confirmpasswordBox.current.focus()}} borderColor={(!isPass && !props.isSignIn && password.length < 3) ? "red" : "#bbb"} onChangeText={text => { setPassword(text); setIsPass(passwordValidate(text,confirm,props.isSignIn)) }}width="100%" icon="map-pin" placeholder="Location"  />
              <IconTextBox ref={confirmpasswordBox} onSubmit={() => {props.submit()}} show={!props.isSignIn} borderColor={(!isPass && !props.isSignIn && confirm.length < 3) ? "red" : "#bbb"} width="100%" onChangeText={text => { setConfirm(text); setIsPass(passwordValidate(password,text,props.isSignIn)) }} icon="edit" placeholder="Bio" />
              */