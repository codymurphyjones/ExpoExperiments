// TabBar.js
import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { ButtonProps } from "./types"





import { withTheme } from '../../with/theme';

const Button = ({theme, ...props}: ButtonProps) => {

  let style={
        justifyContent: props.icon ? 'space-around' : 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: props.color,
        padding: props.padding || 5,
        margin: props.margin || 5,
        width: props.width || 80,
        maxWidth: props.maxWidth || null,
        flexDirection: props.icon ? 'row' : 'column',
        alignItems: 'center'
    }

    let teststyle={
      justifyContent: props.icon ? 'space-around' : 'center',
      flexDirection: props.icon ? 'row' : 'column',
      padding: 5,
      width: props.width || 80,
      height: 'auto',
      alignItems: 'center'
  }

    let onPressDefault = () => {
      
    }

    let content = () => {
      if(props.icon != null) {
        return ( <>
            <Icon name={props.icon || "search"} style={{flex: 1, fontSize: 15, padding: 5, paddingRight:10, color: (props.iconColor || (props.textColor || (props.color || theme.color)))}} />
            <Text style={{flex: 2, color: (props.textColor || (props.color || theme.color)), fontWeight: props.bold ? 'bold' : 'normal'}}>{props.children}</Text>
            </>
        )
      }
              
      return (<Text style={{color: (props.textColor || (props.color || theme.color))}}>{props.children}</Text>)
    }

	
  return (
      <View style={style}>
          <TouchableHighlight style={teststyle} onPress={props.onPress || onPressDefault}>
            {content()}
          </TouchableHighlight>
      </View>
  );
};

export default withTheme(Button);
