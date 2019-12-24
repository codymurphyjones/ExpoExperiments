// Main.js
import React, {useState, useEffect} from 'react';
import { View } from 'react-native';

import { withTheme } from '../theme'



const HideComponent = props => {
  if(props.show){
        return (<>{props.children}</>)
  }

  return (<View></View>)
};

export default withTheme(HideComponent);
