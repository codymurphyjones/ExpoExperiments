// Main.js
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import ScreenArea from '../../components/ScreenArea';
import Button from '../../components/Button';
import IconTextBox from '../../components/IconTextBox';

import {emailValidate, passwordValidate} from './validations';
import HiddenIconTextBox from './HiddenIconTextBox';

import { withTheme } from '../../theme'

import { auth } from '../../utils'


const UserAuthentication = props => {
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


  useEffect(() => {
    auth.onAuthStateChanged(function(user) {
        if (user) {
          var uid = user.uid;
          var providerData = user.providerData;
          console.log("onAuth Login Change")
          props.navigation.navigate("AuthLoading") 
        } else {
          console.log("onAuth Logout Change")
        }
    });
  }, [])

let isValidated = () => {
  return isSignIn || (isEmail && isPass);
}
  
async function createUser() {
  await auth.createUserWithEmailAndPassword(email, password).catch(function(myerror) {
    console.log("Created user");
    var user = auth.currentUser;
    var errorCode = myerror.code;
    var errorMessage = myerror.message;
    setError(errorMessage);
  });
}

async function loginUser() {
  await auth.signInWithEmailAndPassword(email, password).catch(function(error) {
    console.log("Login success");
    var user = auth.currentUser;
    var errorCode = error.code;
    var errorMessage = error.message;
    setError(errorMessage);
  });
}

async function submitButton() {
    if(isValidated()) {
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
              <HiddenIconTextBox show={!isSignIn} borderColor={(handle.length < 3 && !isSignIn) ? "red" : "#bbb"}  onChangeText={text => { setHandle(text) }} icon="at-sign" placeholder="Handle" />
              <IconTextBox borderColor={(!isEmail && !isSignIn) ? "red" : "#bbb"} onChangeText={text => { setEmail(text); setIsEmail(emailValidate(text)) }} width="100%" icon="user" placeholder="Email address"  />
              <IconTextBox borderColor={(!isPass && !isSignIn) ? "red" : "#bbb"} onChangeText={text => { setPassword(text); setIsPass(passwordValidate(text,confirm)) }}width="100%" icon="lock" placeholder="Password" password={true}  />
              <HiddenIconTextBox show={!isSignIn} borderColor={(!isPass && !isSignIn) ? "red" : "#bbb"} onChangeText={text => { setConfirm(text); setIsPass(passwordValidate(password,text,isSignIn)) }} icon="shield" placeholder="Confirm password" password={true}  />
              <View style={{flex: 1,alignItems: 'center',
    justifyContent: 'center',}}> 
                  <Text style={[style.text, { margin: 0,color: 'maroon', fontSize: 12, marginTop: 25 }]}>{error}</Text>
               </View>
          </View>
          <View style={{alignItems: "center", width: "80%"}}>  
              <Button onPress={submitButton} width="100%" color={ isValidated() ? "#ffaa22" : "red"}>Submit</Button>
              <Button onPress={() => { setisSignIn(!isSignIn); setIsEmail(emailValidate(email)) }} maxWidth={120} width="100%" color="#ffaa22" textColor="#000">{isSignIn ? "Sign Up" : "Sign In"}</Button>
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
