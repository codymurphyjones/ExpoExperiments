// Main.js
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import ScreenArea from '../../components/ScreenArea';
import Button from '../../components/Button';
import IconTextBox from '../../components/IconTextBox';

import {emailValidate, passwordValidate} from './validations';

import { withTheme } from '../../with/theme'

import { auth } from '../../utils'


const HiddenIconTextBox = React.forwardRef((props, ref) => {
  if(props.show || false){
        return (<IconTextBox ref={ref} onSubmit={props.onSubmit} borderColor={props.borderColor}  onChangeText={props.onChangeText} width="100%" icon={props.icon} placeholder={props.placeholder} password={props.password || false} />)
  }

  return (<View></View>)
});

export default withTheme(HiddenIconTextBox);
