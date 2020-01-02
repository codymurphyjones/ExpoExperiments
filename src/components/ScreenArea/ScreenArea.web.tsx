// Main.js
import React from 'react';
import './style.css';
import {ScreenAreaProps} from './types'

import { withTheme } from '../../with/theme'

const ScreenArea = (props: ScreenAreaProps) => {
  return (
        <div className="container" style={{flex: 1, marginTop: 20, flexGrow: 1, height: "100%", backgroundColor: props.backgroundColor || "#fff", overflowY: 'auto' }}>
	          {props.children}
        </div>
  );
};

export default withTheme(ScreenArea);

