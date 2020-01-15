import {StyleSheet} from 'react-native'

import React from 'react'

function Image(props) {
    const {style, onLoadEnd , ...ObjProps} = props
    return (<img src={props.source.uri} onLoad={onLoadEnd} style={style} {...ObjProps} />)
}

export {Image as default}