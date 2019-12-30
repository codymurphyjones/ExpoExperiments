// TabBar.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableHighlight  } from 'react-native';
import StreetAvatar from './StreetAvatar'
import { withTheme } from '../../with/theme';
import StreetPostOptions from './StreetPostOptions'
import StreetComments from './StreetComments'

type StreetPostProps = {
	count?: number,
	children?: React.ReactNode,
	user?: string,
	name?: string,
	ticker?: string,
	textColor?: string
}

const StreetPost = (props: StreetPostProps) => {
	const [visible,setVisible] = useState(false);
	const [showComments,setShowComments] = useState(false);
	
	const [count, setCount] = useState(props.count | 0);
	const [vote, setVote] = useState(props.count | 0);
    
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
	   
	   const loadStart= (e) => {setVisible(false); console.log("I do for sure")}
	   const loadEnd=  (e) => {setVisible(true); console.log("Do I happen?") }
       
  return (	
    <View style={[style.container, {opacity: (visible ? 1: 0)}]}>	
		<View style={[style.container, { borderBottomWidth: 0, visibility: (visible ? "visible": "hidden")}]}>
			<View style={style.head}>
                <StreetAvatar OnLoadStart={loadStart} OnLoadEnd={loadEnd} user={props.user} name={props.name} ticker={props.ticker} color={props.textColor} />
			</View>
			<View style={style.content}>
				<Text style={{ color: props.textColor}}>{props.children}</Text>
			</View>
		</View>
		<StreetPostOptions showComments={showComments} OnPressComment={()=>{ setShowComments(!showComments)}} OnUpPress={OnUpPress} OnDownPress={OnDownPress} shares={6} count={count} vote={vote} comments={10} />
		<StreetComments showComments={showComments} />
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

export default withTheme(StreetPost);
