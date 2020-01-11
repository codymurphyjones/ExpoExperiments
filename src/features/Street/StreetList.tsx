// TabBar.js
import React, {useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import StreetPost from './StreetPost'
import {useSpring,animated, config } from 'react-spring/native'

import { withTheme } from 'With/theme';

const AnimView = animated(View);

type StreetPostListProps = {
  posts: any,
  theme: any
}

const StreetPostList = (props: StreetPostListProps) => {
  const { opacity } = useSpring({config: config.gentle, from: { opacity: 0.0 }, to: { opacity: 1.0 }, delay: 500 })
   

  const listItems = Object.keys(props.posts).map((id) => {
    let data = props.posts[id];
    return React.useMemo(() =>(
      <StreetPost key={id} user={data.user} name="Kyle Myers" textColor={props.theme.color} ticker={data.ticker} src={data.profile}>{data.body}</StreetPost>
    ),[props.posts]);
  }
  );
	
  return (
		<AnimView style={[style.container, {opacity: opacity}]}>
		  {listItems}
		</AnimView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  alignSelf: 'stretch',
  marginTop: 0
  }
});

export default withTheme(StreetPostList);
