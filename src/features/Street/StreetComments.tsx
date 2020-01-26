// TabBar.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image  } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import StreetAvatar from './StreetAvatar'
import { withTheme } from 'With/theme';
import StreetComment from './StreetComment'
import {animated, config, useSpring } from 'react-spring/native'
const AnimView = animated(View);


type StreetCommentsProps = {
  showComments?: boolean,
  opacity?: number
}


const StreetComments = (props: StreetCommentsProps) => {

  const {  display } = useSpring({config: config.gentle,reverse: props.showComments, from: { display: 'flex' }, to: {   display: 'none' } })
       
  
  
       
  return (	
		<AnimView style={[style.container, { opacity: props.opacity, display: display }]}>
            <StreetComment showComments={props.showComments} />
            <StreetComment showComments={props.showComments} />
            <StreetComment showComments={props.showComments} />
        </AnimView>
  );
};

const style = StyleSheet.create({
  container: {
	margin: 0,
  marginBottom: 0,
	alignSelf: 'stretch',
	alignItems: 'center',
	flexDirection: 'column',
  justifyContent: 'space-around',
  }
});

export default withTheme(StreetComments);
