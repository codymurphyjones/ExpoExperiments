// Main.js
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import ScreenArea from '../../components/ScreenArea';
import Button from '../../components/Button';
import IconTextBox from '../../components/IconTextBox';

import { withTheme } from '../../with/theme'

import { auth } from '../../utils'


export const emailValidate = (email) => {
    const validate = /.*@?.*\.[0-z]*/

    return validate.test(String(email).toLowerCase())
}

export const passwordValidate = (password, confirm, isSignIn) => {
  const validate = new RegExp(password);

  return (
    (!isSignIn && password.length < 6) ||
    validate.test(String(confirm).toLowerCase())
  );
};
