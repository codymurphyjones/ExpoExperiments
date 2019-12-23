// Main.js
import React from 'react';
import { SafeAreaView, ScrollView, View} from 'react-native';
import { withTheme } from '../../theme'

const ScreenArea = (props) => {

    return (<SafeAreaView style={{flex: 1, backgroundColor: props.backgroundColor, width: '100%', height: "100%"}}>
              <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1, width: '100%' }}>
                {props.children}
              </ScrollView></SafeAreaView>);
};

export default withTheme(ScreenArea);
