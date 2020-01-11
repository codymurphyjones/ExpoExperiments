// TabBar.js
import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image  } from 'react-native';
import { withTheme } from 'With/theme';
import {useSpring,animated, config } from 'react-spring/native'

//let height = 'auto'

const AnimView = animated(View);
const AnimImage= animated(Image);


const StreetComment = props => {
  const { minHeight, height, opacity, marginBottom } = useSpring({config: config.gentle,reverse: props.showComments, to: { minHeight: 0, height: '0%', opacity: 0.0, marginBottom: 0, size: 0 }, from: { minHeight: 120, height: '0%', opacity: 1.0, marginBottom: 10}, delay: 600 })
  const { iconHeight, iconWidth} = useSpring({config: config.gentle,reverse: props.showComments, to: { iconHeight: 0, iconWidth: 0 }, from: { iconHeight: 70, iconWidth: 70 }, delay: 1200 })
 
  return useMemo(() => (	
			<AnimView style={[style.comment, {minHeight: minHeight, opacity, height: height, marginBottom: marginBottom}]}>
                <View style={style.icon}>
                  <AnimImage style={[style.stretch, {height: iconHeight, width: iconWidth}]} source={require('../../../assets/avatar.png')} ></AnimImage>
                  <Text>Cody Jones</Text>
                </View>
                <View style={style.message}>
                    <Text>I definitely support and agree with your analysis, cant wait to see the money!</Text>
                </View>
            </AnimView>
  ), [props, minHeight, height, opacity])
};

const style = StyleSheet.create({
  message: {
    flex: 1,
    padding: 0,
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    },
  comment: {
    flex: 1,
	flexDirection: 'row',
  width: '90%',
  maxWidth: 500,
  margin: 0,
  marginBottom: 0,
  padding: 0,
  borderRadius: 8,
  borderWidth: 2,
  borderColor: '#fce1ab',
  },
  icon: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    paddingRight: 20
    },
    stretch: {
      width: 0,
      height: 0,
      resizeMode: 'stretch',
      marginBottom: 0,
    borderRadius: 30
    }
});

export default withTheme(StreetComment);
