// Main.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { withTheme } from '../src/theme'

const MainScreen = (props) => {
  return (
    <View style={[style.container, { backgroundColor: props.theme.backgroundColor }]}>
      <Text style={[style.text, { color: props.theme.color }]}>MAIN PART</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});

export default withTheme(MainScreen);
