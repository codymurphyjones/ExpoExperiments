// TabBar.js
import React, {useMemo} from 'react';
import { View, StyleSheet } from 'react-native';
import StreetPost from './StreetPost'

import { withTheme } from '../../with/theme';

type StreetPostListProps = {
  posts: any,
  theme: any
}

let Post = (user: any,id: any, ticker: string, profile: string, body:string, textColor:string) => {
    return () => (<StreetPost key={id} user={user} name="Kyle Myers" textColor={textColor} ticker={ticker} src={profile}>{body}</StreetPost>)
  }

const StreetPostList = (props: StreetPostListProps) => {
  const listItems = Object.keys(props.posts).map((id) => {
    let data = props.posts[id];
    
    return useMemo(Post(data.user,id,data.ticker,data.profile,data.body,props.theme.color),[props.posts]);
  }
  );
	
  return (
		<View style={style.container}>
		  {listItems}
		</View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  alignSelf: 'stretch',
  marginTop: 10
  }
});

export default withTheme(StreetPostList);
