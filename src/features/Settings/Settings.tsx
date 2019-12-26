// Main.js
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import ScreenArea from '../components/ScreenArea';
import Button from '../../components/Button';
import IconTextBox from '../../components/IconTextBox'

import { withTheme } from '../../with/theme'

import { auth } from '../../utils'

let myWidth = "100%"

let SettingComponents = {
  Main: (props) => {

    let SignIn = () => { auth.signOut().then(function() {
    }); };

    return (<><View style={{width: "65%"}}>  
                  <Button onPress={()=> {props.navigateTo("Notification");}} icon="bell" width={myWidth} iconColor="#ffaa22" bold={true}>Notifications</Button>
                  <Button onPress={()=> {props.navigateTo("Privacy");}}  icon="lock" width={myWidth} iconColor="#ffaa22" bold={true}>Privacy</Button>
                  <Button onPress={()=> {props.navigateTo("Account");}} icon="user" width={myWidth} iconColor="#ffaa22" bold={true}>Account</Button>
                  <Button onPress={()=> {props.navigateTo("Feedback");}} icon="award" width={myWidth} iconColor="#ffaa22" bold={true}>Feedback</Button>
          </View>
        <View style={{ width: "65%", marginTop: 50}}>  
              <Button onPress={()=> {props.navigateTo("About");}} icon="info" width={myWidth} iconColor="#ffaa22" bold={true}>About</Button>
              <Button onPress={SignIn} icon="log-out" width={myWidth} iconColor="#ffaa22" bold={true}>Logout</Button>
      </View></>)
  },
  Feedback: (props) => {

    return (<><View style={{width: "65%"}}>   
                  <Button onPress={()=> {props.navigateTo("Main");}} icon="bell" width={myWidth} iconColor="#ffaa22" bold={true}>Submit Feedback</Button>
                  
                  </View>
        <View style={{ width: "65%", marginTop: 50}}>  
              
              <Button onPress={() => { props.navigateTo("Main")}} icon="skip-back" width={myWidth} iconColor="#ffaa22" bold={true}>Go Back</Button>
      </View></>)
  },
  Notification: (props) => {

    return (<><View style={{width: "65%"}}> 
                  <Button onPress={()=> {props.navigateTo("Main");}} icon="bell" width={myWidth} iconColor="#ffaa22" bold={true}>Toggle Notifications</Button>
          </View>
        <View style={{ width: "65%", marginTop: 50}}>  
              
              <Button onPress={() => { props.navigateTo("Main")}} icon="skip-back" width={myWidth} iconColor="#ffaa22" bold={true}>Go Back</Button>
      </View></>)
  },
  Account: (props) => {

    return (<><View style={{width: "65%"}}> 
                  <Button onPress={()=> {props.navigateTo("Main");}} icon="bell" width={myWidth} iconColor="#ffaa22" bold={true}>Update First Name</Button>
                  <Button onPress={()=> {props.navigateTo("Main");}}  icon="lock" width={myWidth} iconColor="#ffaa22" bold={true}>Update Last Name</Button>
                  <Button onPress={()=> {props.navigateTo("Main");}} icon="user" width={myWidth} iconColor="#ffaa22" bold={true}>Upload Profile</Button>
          </View>
        <View style={{ width: "65%", marginTop: 50}}>  
              
              <Button onPress={() => { props.navigateTo("Main")}} icon="skip-back" width={myWidth} iconColor="#ffaa22" bold={true}>Go Back</Button>
      </View></>)
  },
  About: (props) => {

    return (<><View style={{width: "65%"}}> 
                  <Text style={{fontSize: 28, textAlign: 'center', marginBottom: 15}}>TickerShare</Text>
                  <Text style={{fontSize: 18, textAlign: 'center'}}>Beta App v0.0.5</Text>
                  <Text style={{fontSize: 12, textAlign: 'center'}}>All rights reserved</Text>
          </View>
        <View style={{ width: "65%", marginTop: 50}}>  
              
              <Button onPress={() => { props.navigateTo("Main")}} icon="skip-back" width={myWidth} iconColor="#ffaa22" bold={true}>Go Back</Button>
      </View></>)
  },
  Privacy: (props) => {

    return (<><View style={{width: "65%"}}>  
                  <Button onPress={()=> {props.navigateTo("Main");}} icon="bell" width={myWidth} iconColor="#ffaa22" bold={true}>Toggle Data Storing</Button>
                  <Button onPress={()=> {props.navigateTo("Main");}}  icon="lock" width={myWidth} iconColor="#ffaa22" bold={true}>Reset Password</Button>
                  <Button onPress={()=> {props.navigateTo("Main");}} icon="user" width={myWidth} iconColor="#ffaa22" bold={true}>Delete Account</Button>
          </View>
        <View style={{ width: "65%", marginTop: 50}}>  
              <Button onPress={() => { props.navigateTo("Main")}} icon="skip-back" width={myWidth} iconColor="#ffaa22" bold={true}>Go Back</Button>
      </View></>)
  }
}


const Settings = (props) => {
  const [activeComponent, setActiveComponent] = useState("Main");
  console.log(activeComponent);

  let MyComponent = SettingComponents[activeComponent];
  return (<>
        <Text style={[style.text, { color: props.theme.color, fontSize: 22, marginBottom: 20}]}>{activeComponent == "Main" ? "Settings" : activeComponent}</Text>
		    <View style={style.container2}> 
            <MyComponent navigateTo={setActiveComponent} />
         
      </View></>
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

export default withTheme(Settings);
