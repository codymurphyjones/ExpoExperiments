// Main.js
import React, {useState, useEffect, useRef, forwardRef} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Button from 'Components/Button';
import IconTextBox from 'Components/IconTextBox';

import {emailValidate, passwordValidate} from './validations';
import UserLogin from './UserLogin'
import UserRegistration from './UserRegistration'
import UserInformation from './UserInformation'

import { withTheme, ThemePropTypes} from 'With/theme'
var sha256 = require("js-sha256")


import { auth, firestore } from 'Utils'

type UserAuthenticationProps = {
  navigation?: any,
  theme?: ThemePropTypes
}

function shaAlgorithm(message) {
  return sha256(message);
}


const UserAuthentication = (props: UserAuthenticationProps) => {
  const [error,setError] = useState("");
  const [canSubmit,setcanSubmit] = useState(true);
  const [view,setView] = useState("default");
  //Toggle SignIn/SignUp
  const [isSignIn,setisSignIn] = useState(true);
  
  //passwords
  const [password,setPassword] = useState("");
  const [confirm,setConfirm] = useState("");

  //email
  const [email,setEmail] = useState("");
  const [isEmail,setIsEmail] = useState(true);
  const [name,setName] = useState("");

  //Handle
  const [handle,setHandle] = useState("");
  const [bio,setBio] = useState("");
  const [year,setYear] = useState("");
  const [location,setLocation] = useState("");


  ////References

  useEffect(() => {
    let unsubscribe = auth.onAuthStateChanged(function(userAuth) {
      if (userAuth) {
          props.navigation.navigate("AuthLoading") 
      }
    });
    
    return () => {
      unsubscribe();
    }
}, [])
  
  async function createUser() {
    console.log(shaAlgorithm); 
    await auth.createUserWithEmailAndPassword(email, shaAlgorithm(password)).then((res)=>{
      const [firstname,lastname] = name.split(" ");

      firestore.collection("UserData").doc(res.user.uid).set({
        bio: bio,
        born: year,
        fullname: name,
        location: location,
        handle: handle,
        firstname: firstname,
        lastname: lastname


      })
      
    }).catch(function(myerror) {
      var errorMessage = myerror.message;
      setError(errorMessage);
    });
  }

  async function loginUser() {
    await auth.signInWithEmailAndPassword(email, shaAlgorithm(password)).then((user)=>{

    }).catch(function(error) {
      var errorMessage = error.message;
      setError(errorMessage);
    });
  }

  async function submitButton() {
 
    switch(view) {
      case 'default':
          await loginUser();
        break;
      case 'register':
        if(canSubmit) {
          setView("info");
          setcanSubmit(false);
        }

        break;
      case 'info':
        if(canSubmit) {
          setcanSubmit(false);
          setisSignIn(!isSignIn);
          await createUser();
        }
        break;
    }
  }

  
  function returnAuthView(value: string) {
    let authView = {
      "default": (<UserLogin submit={submitButton} password={[password,setPassword]} email={[email,setEmail]} />),
      "register": (<UserRegistration submitval={canSubmit} canSubmit={setcanSubmit} submit={submitButton} password={[password,setPassword]} email={[email,setEmail]} name={[name,setName]}  confirm={[confirm,setConfirm]} isSignIn={isSignIn} />),
        "info": (<UserInformation canSubmit={setcanSubmit} submit={submitButton} bio={[bio,setBio]} year={[year,setYear]} location={[location,setLocation]} handle={[handle,setHandle]} />)
    }
    return authView[value];

  }


  return (() => {	

    
    return (<View style={style.container}>
		    <View style={style.container2}> 
          <View style={{width: 180, marginBottom: 60}}>  
              <Text style={[style.text, { margin: 0,color: props.theme.color, fontSize: 36, marginTop: 25 }]}>Welcome</Text>
              <Text style={[style.text, { marginTop: -10,color: '#ffaa22', fontSize: 32, fontWeight: 'bold' }]}>{isSignIn ? "Sign in" : "Sign up"}</Text>
          </View>
          <View style={{marginBottom: 50, width:"80%", flex: 1}}> 
              {returnAuthView(view)}
              
              
          </View>
          <View style={{alignItems: "center", width: "80%"}}>  
              <Button onPress={submitButton} width="100%" color={ (canSubmit) ? "#ffaa22" : "red"}>Submit</Button>
              <Button onPress={() => { (view=="default") ? setView("register") : (() => { setcanSubmit(true); setView("default"); })(); setisSignIn(!isSignIn); }} maxWidth={120} width="100%" color="#ffaa22" textColor={ props.theme.color}>{isSignIn ? "Sign Up" : "Sign In"}</Button>
          </View>
         
      </View>
      </View>);
  })()
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
