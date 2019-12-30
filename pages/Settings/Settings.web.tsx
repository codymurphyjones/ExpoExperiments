// Main.js
import React, {useState, useEffect} from 'react';

import Settings from './Main'


function asWebView(Component) {
  return props => {

    return (
      <Component
      isWebView={true}
        {...props}
      />
    );
  }
}

export default asWebView(Settings);
