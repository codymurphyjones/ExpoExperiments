// TabBar.js
import React, { useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Ticker from '../../components/Ticker'
import { withTheme, ThemePropTypes } from '../../with/theme';



import { storage } from '../../utils'

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

  useEffect(() => {
    let query = props.user.get()
      .then(snapshot => {
          if (snapshot.empty) {
            
            return;
          }  
          
          let data = snapshot.data()

          storage.ref(data.profile).getDownloadURL().then((url: string) => { setImage(url);  });
          setName(data.firstname + " " + data.lastname);
      })
    .catch(err => {
      
    });
  },[]);
  
	
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
        <Image onLoadStart={props.OnLoadStart}
            onLoadEnd={props.OnLoadEnd}
            style={styles.stretch} source={{uri:image}} ></Image>
        <Text style={{color: props.color, fontWeight: 'bold', marginTop: 15}}>{name}</Text>
		</View>
		<Text style={{color: props.color, width: 80}}>2 mins ago</Text>
	</View>
 
  );
};

const styles = StyleSheet.create({
  stretch: {
    width: 70,
    height: 70,
    resizeMode: 'stretch',
	borderRadius: 30
  }
});


export default withTheme(StreetAvatar);
