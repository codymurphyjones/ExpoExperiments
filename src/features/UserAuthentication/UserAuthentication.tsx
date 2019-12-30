// Main.js
import React, {useState, useEffect, useRef, forwardRef} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Button from '../../components/Button';
import IconTextBox from '../../components/IconTextBox';

import {emailValidate, passwordValidate} from './validations';
import HiddenIconTextBox from './HiddenIconTextBox';

import { withTheme, ThemePropTypes} from '../../with/theme'

import { auth } from '../../utils'

type UserAuthenticationProps = {
  navigation?: any,
  theme?: ThemePropTypes
}


const UserAuthentication = (props: UserAuthenticationProps) => {
  const [error,setError] = useState("");
  //Toggle SignIn/SignUp
  const [isSignIn,setisSignIn] = useState(true);
  //Handle
  const [handle,setHandle] = useState("");
  //passwords
  const [password,setPassword] = useState("");
  const [confirm,setConfirm] = useState("");
  const [isPass,setIsPass,] = useState(false);
  //email
  const [email,setEmail] = useState("");
  const [isEmail,setIsEmail] = useState(true);


  ////References
  const passwordBox = useRef(null);
  const emailBox = useRef(null);
  const confirmpasswordBox = useRef(null);


  useEffect(() => {
    auth.onAuthStateChanged(function(user) {
        if (user) {
         props.navigation.navigate("AuthLoading") 
        } 
    });
  }, [])
  
  async function createUser() {
    await auth.createUserWithEmailAndPassword(email, password).catch(function(myerror) {
      var errorMessage = myerror.message;
      setError(errorMessage);
    });
  }

  async function loginUser() {
    await auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      var errorMessage = error.message;
      setError(errorMessage);
    });
  }

  async function submitButton() {
    if(isSignIn || (isEmail && isPass)) {
      if(!isSignIn) {
        await createUser();
      }
      else {
        await loginUser();
      }
    }
  }
	
  return (	
    <View style={style.container}>
		    <View style={style.container2}> 
          <View style={{width: 180, marginBottom: 60}}>  
              <Text style={[style.text, { margin: 0,color: props.theme.color, fontSize: 36, marginTop: 25 }]}>Welcome</Text>
              <Text style={[style.text, { marginTop: -10,color: '#ffaa22', fontSize: 32, fontWeight: 'bold' }]}>{isSignIn ? "Sign in" : "Sign up"}</Text>
          </View>
          <View style={{marginBottom: 50, width:"80%", flex: 1}}> 
              <HiddenIconTextBox onSubmit={() => {emailBox.current.focus()}} show={!isSignIn} borderColor={(handle.length < 3 && !isSignIn) ? "red" : "#bbb"}  onChangeText={text => { setHandle(text) }} icon="at-sign" placeholder="Handle" />
              <IconTextBox ref={emailBox} onSubmit={() => {passwordBox.current.focus()}} borderColor={(!isEmail && !isSignIn) ? "red" : "#bbb"} onChangeText={text => { setEmail(text); setIsEmail(emailValidate(text)) }} width="100%" icon="user" placeholder="Email address"  />
              <IconTextBox ref={passwordBox} onSubmit={() => { isSignIn ? submitButton() : confirmpasswordBox.current.focus()}} borderColor={(!isPass && !isSignIn) ? "red" : "#bbb"} onChangeText={text => { setPassword(text); setIsPass(passwordValidate(text,confirm,isSignIn)) }}width="100%" icon="lock" placeholder="Password" password={true}  />
              <HiddenIconTextBox ref={confirmpasswordBox} onSubmit={() => {submitButton()}} show={!isSignIn} borderColor={(!isPass && !isSignIn) ? "red" : "#bbb"} onChangeText={text => { setConfirm(text); setIsPass(passwordValidate(password,text,isSignIn)) }} icon="shield" placeholder="Confirm password" password={true}  />
              <View style={{flex: 1,alignItems: 'center',
    justifyContent: 'center',}}> 
                  <Text style={[style.text, { margin: 0,color: 'maroon', fontSize: 12, marginTop: 25 }]}>{error}</Text>
               </View>
          </View>
          <View style={{alignItems: "center", width: "80%"}}>  
              <Button onPress={submitButton} width="100%" color={ (isSignIn || (isEmail && isPass)) ? "#ffaa22" : "red"}>Submit</Button>
              <Button onPress={() => { setisSignIn(!isSignIn); setIsEmail(emailValidate(email)) }} maxWidth={120} width="100%" color="#ffaa22" textColor={ props.theme.color}>{isSignIn ? "Sign Up" : "Sign In"}</Button>
          </View>
         
      </View>
	    </View>
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

export default withTheme(UserAuthentication);
