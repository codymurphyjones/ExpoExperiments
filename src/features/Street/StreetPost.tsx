// TabBar.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableHighlight  } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import StreetAvatar from './StreetAvatar'
import { withTheme } from '../../with/theme';
import HideComponent from "../../components/HideComponent"

const TrendPost = props => {
	const [visible,setVisible] = useState(false);
	
	const [count, setCount] = useState(props.count | 0);
	const [vote, setVote] = useState(props.count | 0);
	
	/*useEffect(() => {
	props.src.getDownloadURL().then((url: string) => { setImage(url);  });
	}, []);*/
    
    function OnUpPress() {
			if(vote <= 0) {
				setCount((count - vote) + 1);
				setVote(1);
			}
       }

    function OnDownPress() {
		if(vote >= 0) {
			setCount((count - vote) - 1);
			setVote(-1);
		}
	   }
	   
	   const loadStart= (e) => {setVisible(false); console.log("Start") }
	   const loadEnd=  (e) => {setVisible(true); console.log("End") }
       
  return (	
    <View style={[style.container, {hidden: (visible ? false: true)}]}>	
		<View style={[style.container, { borderBottomWidth: 0, visibility: (visible ? "visible": "hidden")}]}>
			<View style={style.head}>
                <StreetAvatar OnLoadStart={loadStart} onLoadEnd={loadEnd} user={props.user} name={props.name} ticker={props.ticker} color={props.textColor} />
			</View>
			<View style={style.content}>
				<Text style={{ color: props.textColor}}>{props.children}</Text>
			</View>
		</View>
		<View style={style.bottom}>
            <View style={style.icon}>
                <Icon name="share" style={{ fontSize: 15, padding: 5, paddingRight:10 }} />
                <Text>6</Text>
            </View>
			<View style={style.icon}>
                <Icon name="message-circle" style={{ fontSize: 15, padding: 5, paddingRight:10 }} />
                <Text>6</Text>
            </View>
			<View style={style.icon}>
            <TouchableHighlight onPress={OnUpPress}>
                <Icon name="chevron-up" style={{ fontSize: 15, padding: 5, paddingRight:10, color: (vote > 0) ? "green" : "#000" }}  />
            </TouchableHighlight>
                <Text style={{color: (vote > 0) ? "green" : ((vote < 0) ? "red" : "#000") }}>{count}</Text>
            <TouchableHighlight onPress={OnDownPress}>
                <Icon name="chevron-down" style={{ fontSize: 15, padding: 5, paddingRight:10, color: (vote < 0) ? "red" : "#000" }}  />
            </TouchableHighlight>
            </View>
		</View>
	</View>
  );
};

const style = StyleSheet.create({
  container: {
	alignSelf: 'stretch',
	alignItems: 'center',
	justifyContent: 'space-between',
	borderColor: '#fce1ab',
	borderBottomWidth: 3
  },
  content: {
	flex: 1,
	margin: 20,
	minHeight: 130,
	alignSelf: 'stretch',
	alignItems: 'center',
	justifyContent: 'center'
  },
  head: {
	flex: 1,
	margin: 10,
	alignSelf: 'stretch',
	alignItems: 'center',
	justifyContent: 'space-around'
  },
  bottom: {
	flex: 1,
	margin: 10,
	marginTop: 30,
	marginBottom: 30,
	alignSelf: 'stretch',
	alignItems: 'center',
	flexDirection: 'row',
	justifyContent: 'space-around'
  },
  icon: {
	flex: 1,
	alignItems: 'center',
	flexDirection: 'row',
	justifyContent: 'center'
  }
});

export default withTheme(TrendPost);
