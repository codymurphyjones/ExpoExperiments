// Main.js
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import ScreenArea from '../components/ScreenArea';
import Button from '../components/Button';
import IconTextBox from '../components/IconTextBox';

import { withTheme } from '../theme'

import { auth } from '../utils'

const setAsyncTimeout = (cb, timeout = 0) => new Promise(resolve => {
  setTimeout(
			() => {
					cb();
					resolve();
				}, 
			timeout);
	});


const Login = (props) => {
  console.log("Auth Loading");
  const [userData, setUserData] = useState(null);

  async function getUser() {
    console.log("Getting user");
    let userAcc;
    try {
      userAcc = await auth.currentUser;
    }
    catch {}

    return userAcc;
  }

  function navigateToApp(val) {
    console.log(val);
    setUserData(userData);
    if(val == null) {
        props.navigation.navigate("Auth", { message: "Unable to login" }) 
    }
    else {
    props.navigation.navigate("App") 
  }

  }

  var user = getUser().then(navigateToApp);
  
  return (
    <ScreenArea backgroundColor={props.theme.backgroundColor}>
	    <View style={style.container}>
		    <View style={style.container2}> 
            <ActivityIndicator size="large" color="#ffaa22" />
      </View>
	    </View>
    
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
    height: 50,
    width: 50,
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});

export default withTheme(Login);
