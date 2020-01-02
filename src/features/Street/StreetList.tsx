// TabBar.js
import React, {useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import StreetPost from './StreetPost'

import { withTheme } from '$with/theme';

type StreetPostListProps = {
  posts: any,
  theme: any
}

const StreetPostList = (props: StreetPostListProps) => {

  const listItems = Object.keys(props.posts).map((id) => {
    let data = props.posts[id];
    return React.useMemo(() =>(
      <StreetPost key={id} user={data.user} name="Kyle Myers" textColor={props.theme.color} ticker={data.ticker} src={data.profile}>{data.body}</StreetPost>
    ),[props.posts]);
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
