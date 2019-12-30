// TabBar.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image  } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import StreetAvatar from './StreetAvatar'
import { withTheme } from '../../with/theme';

const StreetComment = props => {
       
  return (	
			<View style={style.comment}>
                <View style={style.icon}>
                  <Image style={style.stretch} source={require('../../../assets/avatar.png')} ></Image>
                  <Text>Cody Jones</Text>
                </View>
                <View style={style.message}>
                    <Text>I definitely support and agree with your analysis, cant wait to see the money!</Text>
                    </View>
            </View>
  );
};

const style = StyleSheet.create({
  message: {
    flex: 1,
    padding: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    },
  comment: {
	flexDirection: 'row',
  width: '90%',
  maxWidth: 500,
  margin: 5,
  borderRadius: 8,
  borderWidth: 2,
  borderColor: '#fce1ab',
  },
  icon: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRightWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: '#fce1ab',
    },
    stretch: {
      width: 70,
      height: 70,
      resizeMode: 'stretch',
      marginBottom: 5,
    borderRadius: 30
    }
});

export default withTheme(StreetComment);
