// Main.js
import React from "react"
import {Image, StyleSheet} from 'react-native'


function FastImage(props) {
    const {style, ...ObjProps} = props

    
    return (<Image style={style}  {...ObjProps} />)
}

export {FastImage as default}


