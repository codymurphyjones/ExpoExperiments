// TabBar.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image  } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import StreetAvatar from './StreetAvatar'
import { withTheme } from '../../with/theme';
import StreetComment from './StreetComment'

type StreetCommentsProps = {
  showComments?: boolean
}


const StreetComments = (props: StreetCommentsProps) => {
    if(!props.showComments)
        return (<></>)
       
  return (	
		<View style={style.container}>
            <StreetComment />
            <StreetComment />
            <StreetComment />
            <StreetComment />
            <StreetComment />
            <StreetComment />
            <StreetComment />
        </View>
  );
};

const style = StyleSheet.create({
  container: {
	flex: 1,
	margin: 10,
	marginBottom: 30,
	alignSelf: 'stretch',
	alignItems: 'center',
	flexDirection: 'column',
  justifyContent: 'space-around',
  },
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
    borderRadius: 30
    }
});

export default withTheme(StreetComments);
