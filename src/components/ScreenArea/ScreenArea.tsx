// Main.js
import React from 'react';
import { SafeAreaView, ScrollView, View} from 'react-native';
import { withTheme } from '../../with/theme'
import {ScreenAreaProps} from './types'

const ScreenArea = (props: ScreenAreaProps) => {

    return (<SafeAreaView style={{flex: 1, backgroundColor: props.backgroundColor || "#fff", width: '100%', height: "100%", paddingTop: 20}}>
              <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1, width: '100%' }}>
                {props.children}
              </ScrollView></SafeAreaView>);
};

export default withTheme(ScreenArea);
