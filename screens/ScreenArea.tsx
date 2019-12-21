// Main.js
import React from 'react';
import { SafeAreaView, ScrollView} from 'react-native';
import { withTheme } from '../src/theme'

const ScreenArea = (props) => {
  return (
    <SafeAreaView style={{flex: 1, marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0, paddingTop: 10, backgroundColor: props.backgroundColor, alignItems: 'center',
    justifyContent: 'center'}}>
      <ScrollView style={{flex: 1,  marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0, width: '100%', height: "100%"}}>
	      {props.children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default withTheme(ScreenArea);
