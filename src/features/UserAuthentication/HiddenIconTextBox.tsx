// Main.js
import React, {useState, useEffect, useMemo} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import IconTextBox from '$components/IconTextBox';


import { withTheme } from '$with/theme'

type HiddenIconTextBoxProps = {
  show?: boolean,
  onSubmit?(): void,
  onChangeText?(): void,
  icon?: string,
  placeholder?: string,
  password?: boolean,
  borderColor?: string
}


const HiddenIconTextBox = React.forwardRef((props: HiddenIconTextBoxProps, ref) => {
  let output;
  if(props.show || false){
    output = (<IconTextBox ref={ref} onSubmit={props.onSubmit} borderColor={props.borderColor}  onChangeText={props.onChangeText} width="100%" icon={props.icon} placeholder={props.placeholder} password={props.password || false} />)
  }
  else
  {
      output = (<View></View>)
  }

  return useMemo(() => output, [props])
});

export default withTheme(HiddenIconTextBox);
