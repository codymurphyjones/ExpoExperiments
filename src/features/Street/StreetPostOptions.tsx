// TabBar.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableHighlight  } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { withTheme } from '../../with/theme';
import {onShare} from './Actions/Share'

type StreetPostOptionsProps = {
  shares?: number,
  OnPressComment?(): void,
  OnUpPress?(): void,
  OnDownPress?(): void,
  comments?: number,
  vote?: number,
  showComments?: boolean,
  count?: number,
  theme?: any
}


const StreetPostOptions = (props: StreetPostOptionsProps) => {
       
  return (	
		<View style={style.bottom}>
            <View style={style.icon}>
              <TouchableHighlight onPress={onShare}>
              <View style={{flex: 1, flexDirection: "row"}}>
                <Icon name="share" style={{ fontSize: 15, padding: 5, paddingRight:10 }} />
                <Text>{props.shares}</Text>
                </View>
            </TouchableHighlight>
            </View>
			<View style={style.icon}>
            <TouchableHighlight onPress={props.OnPressComment}>
              <View style={{flex: 1, flexDirection: "row", backgroundColor: props.showComments ? "#fce1ab" : "rgba(0,0,0,0)", padding: 10, borderRadius: 8}}>
                <Icon name="message-circle" style={{ fontSize: 15, padding: 5, paddingRight:10 }} />
                <Text>{props.comments}</Text>
                </View>
            </TouchableHighlight>
            </View>
			<View style={style.icon}>
            <TouchableHighlight onPress={props.OnUpPress}>
                <Icon name="chevron-up" style={{ fontSize: 15, padding: 5, paddingRight:10, color: (props.vote > 0) ? "green" : props.theme.color }}  />
            </TouchableHighlight>
                <Text style={{color: (props.vote > 0) ? "green" : ((props.vote < 0) ? "red" : props.theme.color) }}>{props.count}</Text>
            <TouchableHighlight onPress={props.OnDownPress}>
                <Icon name="chevron-down" style={{ fontSize: 15, padding: 5, paddingRight:10, color: (props.vote < 0) ? "red" : props.theme.color }}  />
            </TouchableHighlight>
            </View>
		</View>
  );
};

const style = StyleSheet.create({
  bottom: {
	flex: 1,
	margin: 10,
	marginTop: 30,
	marginBottom: 30,
	alignSelf: 'stretch',
	alignItems: 'center',
	flexDirection: 'row',
	justifyContent: 'space-around'
  },
  icon: {
	flex: 1,
	alignItems: 'center',
	flexDirection: 'row',
	justifyContent: 'center'
  }
});

export default withTheme(StreetPostOptions);
