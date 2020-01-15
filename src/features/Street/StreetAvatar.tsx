// TabBar.js
import React, { useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import FastImage from 'Components/FastImage';
import Ticker from 'Components/Ticker'
import { withTheme, ThemePropTypes } from 'With/theme';
import {Placeholder, PlaceholderMedia, ShineOverlay} from 'rn-placeholder'
import {withPlaceholder} from 'With/placeholder'


import { storage } from 'Utils'

type StreetAvatarComponents = {
  theme?: ThemePropTypes,
  color?: string,
  ticker?: string,
  OnLoadStart?(): void,
  OnLoadEnd?(): void,
  user?: any
}



const StreetAvatar = (props: StreetAvatarComponents) => {
  const [name, setName] = useState("");
  const [image,setImage] = useState("./");
  const [load,setLoad] = useState(false);

  useEffect(() => {
    let query = props.user.get()
      .then(snapshot => {
          if (snapshot.empty) {
            
            return;
          }  
          
          let data = snapshot.data()

          storage.ref(data.profile).getDownloadURL().then((url: string) => {  setImage(url);  });
          setName(data.firstname + " " + data.lastname);
      })
    .catch(err => {
      
    });
    
  },[]);

  async function onLoadEndRun() {
    
    await setTimeout(() => {
      setLoad(true);
      props.OnLoadEnd();
    }, 1000);
  }

  

	
  return (
    <View style={{ flex: 1, width: '100%', flexDirection: 'row', alignItems: 'center', paddingTop: 10, justifyContent: 'space-around' }}>
		<Ticker color={props.color}>{props.ticker}</Ticker>
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
                  </FastImage>
				  {React.useMemo(() => {  return withPlaceholder(load, 
                (
                  <FastImage
                        onLoadStart={props.OnLoadStart} 
                        onLoadEnd={onLoadEndRun} 
                        style={styles.stretch} 
                        source={{uri: image}}  >
                        
                  </FastImage>
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
                        style={styles.placeholder} 
                        source={{uri: image}}  >
                        
                      </FastImage></Placeholder></View>
                )
                )
                },[image, props.OnLoadStart, props.OnLoadEnd, load])}
                

        <Text style={{color: props.color, fontWeight: 'bold', marginTop: 15}}>{name}</Text>
		</View>
		<Text style={{color: props.color, width: 80}}>2 mins ago</Text>
	</View>
 
  );
};

const styles = {
  stretch: {
    width: 70,
    height: 70,
    resizeMode: 'stretch',
	borderRadius: 30
  }, 
  placeholder: {
    width: 70,
    height: 70,
    resizeMode: 'stretch',
	borderRadius: 30,
	opacity: 0, width: 1, height: 1
  }
};


export default withTheme(StreetAvatar);
