import {StyleSheet} from 'react-native'

import React from 'react'

function Image(props) {
    const {style, onLoadEnd , ...ObjProps} = props
    return (<img src={props.source.uri} onLoad={onLoadEnd} style={style} {...ObjProps} />)
}

export {Image as default}


/*

{withPlaceholder(load, 
                (
                  <View
			          style={{
				        justifyContent: 'center',
				        borderRadius: 30,
                width: 70,
                flex: 1,
                alignItems: 'center',
                alignSelf: 'center'
		          }}>
                  <FastImage 
                        onLoadStart={props.OnLoadStart} 
                        onLoadEnd={onLoadEndRun} 
                        style={styles.stretch} 
                        source={{uri: image}}  >
                        
                  </FastImage></View>
                ),
                (
              <View
			          style={{
				        justifyContent: 'center',
				        borderRadius: 30,
                width: 70,
                flex: 1,
                alignItems: 'center',
                alignSelf: 'center'
		          }}>
                      <Placeholder Animation={ShineOverlay}>
                      <PlaceholderMedia size={70} />
                      <FastImage 
                        onLoadStart={props.OnLoadStart} 
                        onLoadEnd={onLoadEndRun} 
                        style={styles.stretch} 
                        source={{uri: image}}  >
                        
                      </FastImage></Placeholder></View>
                )
                )
                }

                */