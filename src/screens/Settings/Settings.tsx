// Main.js
import React, {useState, useEffect} from 'react';

import Settings from './Main'



function asMobileView(Component) {
  return props => {

    return (
      <Component
      isWebView={false}
        {...props}
      />
    );
  }
}

export default asMobileView(Settings);
