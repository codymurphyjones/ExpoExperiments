// Main.js
import React, {useState, useEffect} from 'react';
import { View } from 'react-native';

import { withTheme } from '../with/theme'

type HideComponentProps = {
  show?: boolean,
  children?: React.ReactNode
  }




const HideComponent = ({show, children}: HideComponentProps) => {
  if(show){
        return (<>{children}</>)
  }

  return (<View></View>)
};

export default withTheme(HideComponent);
