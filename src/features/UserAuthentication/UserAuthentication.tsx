// Main.js
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import ScreenArea from '../../components/ScreenArea';
import Button from '../../components/Button';
import IconTextBox from '../../components/IconTextBox';

import { withTheme } from '../../theme'

import { auth } from '../../utils'


const UserAuthentication = props => {
  let errorDetected = false;
  const [email,setEmail] = useState("");
  const [error,setError] = useState("");
  const errorMessage = props.navigation.getParam("message", "");
  
  const [isSignIn,setisSignIn] = useState(true);
  
  const [handle,setHandle] = useState("");
  const [password,setPassword] = useState("");
  const [confirm,setConfirm] = useState("");

  const [isEmail,setIsEmail] = useState(true);
  const [isPass,setIsPass,] = useState(false);

  useEffect(() => {}, [error])

  const emailValidate = (email) => {
    const validate = /.*@?.*\.[0-z]*/

    return validate.test(String(email).toLowerCase())
}

  const passwordValidate = (password,confirm) => {
    const validate = new RegExp(password)
    if(!isSignIn)
    {
        if(password.length < 6)
            return false;

        return validate.test(String(confirm).toLowerCase())
    }
    else
        return true;
  }

  async function SignIn() { 
        console.log(error);
        console.log("Testing this")
        if(error == "" && !errorDetected)
          props.navigation.navigate("AuthLoading") 
    };

let SwapSignUp = () => { setisSignIn(!isSignIn); setIsEmail(emailValidate(email)) };

let isValidated = () => {

  if(isSignIn)
    return true;

  if(!isEmail || !isPass) {
      return false;
  }

  return true;
}
  
async function createUser() {
  await auth.createUserWithEmailAndPassword(email, password).catch(function(myerror) {
    console.log("Created user");
    var user = auth.currentUser;
    var errorCode = myerror.code;
    var errorMessage = myerror.message;
    setError(errorMessage);
    errorDetected = errorMessage ? true : false;
  });
}

async function loginUser() {
  await auth.signInWithEmailAndPassword(email, password).catch(function(error) {
    console.log("Login success");
    var user = auth.currentUser;
    var errorCode = error.code;
    var errorMessage = error.message;
    setError(errorMessage);
    errorDetected = errorMessage ? true : false;
  });
}

async function submitButton() {
  setError("");
  auth.signOut().then(function() {
    // Sign-out successful.
    console.log("Sessions cleared");
  });

  if(isValidated()) {
    if(!isSignIn) {
      await createUser();
      await SignIn()
    }
    else {
      await loginUser();
      await SignIn()
    }

    
  }
}

 let handleBox = () => { 
  if(!isSignIn)
        return (<IconTextBox borderColor={(handle.length < 3 && !isSignIn) ? "red" : "#bbb"}  onChangeText={text => { setHandle(text) }}width="100%" icon="at-sign" placeholder="Handle" />)

  return (<View></View>)
};

let confirmPassword = () => { 
  if(!isSignIn)
        return (<IconTextBox borderColor={(!isPass && !isSignIn) ? "red" : "#bbb"} onChangeText={text => { setConfirm(text); setIsPass(passwordValidate(password,text)) }}width="100%" icon="shield" placeholder="Confirm password" password={true}  />)

  return (<View></View>)
};

	
  return (	
    <View style={style.container}>
		    <View style={style.container2}> 
          <View style={{width: 180, marginBottom: 60}}>  
              <Text style={[style.text, { margin: 0,color: props.theme.color, fontSize: 36, marginTop: 25 }]}>Welcome</Text>
              <Text style={[style.text, { marginTop: -10,color: '#ffaa22', fontSize: 32, fontWeight: 'bold' }]}>{isSignIn ? "Sign in" : "Sign up"}</Text>
          </View>
          <View style={{marginBottom: 50, width:"80%", flex: 1}}> 
              {handleBox()}
              <IconTextBox borderColor={(!isEmail && !isSignIn) ? "red" : "#bbb"} onChangeText={text => { setEmail(text); setIsEmail(emailValidate(text)) }} width="100%" icon="user" placeholder="Email address"  />
              <IconTextBox borderColor={(!isPass && !isSignIn) ? "red" : "#bbb"} onChangeText={text => { setPassword(text); setIsPass(passwordValidate(text,confirm)) }}width="100%" icon="lock" placeholder="Password" password={true}  />
              {confirmPassword()}
              <View style={{flex: 1,alignItems: 'center',
    justifyContent: 'center',}}> 
                  <Text style={[style.text, { margin: 0,color: 'maroon', fontSize: 12, marginTop: 25 }]}>{errorMessage || error}</Text>
               </View>
          </View>
          <View style={{alignItems: "center", width: "80%"}}>  
              <Button onPress={submitButton} width="100%" color={ isValidated() ? "#ffaa22" : "red"}>Submit</Button>
              <Button onPress={SwapSignUp} maxWidth={120} width="100%" color="#ffaa22" textColor="#000">{isSignIn ? "Sign Up" : "Sign In"}</Button>
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
