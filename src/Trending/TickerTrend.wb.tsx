// TabBar.js
import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';

import { withTheme } from '../theme';

import { IEXCloudClient } from "node-iex-cloud";
const fetch = window.fetch.bind(window);


 
const iex = new IEXCloudClient(fetch, {
  sandbox: true,
  publishable: "pk_e6997b14d0a949dc944d822e76f66a31",
  version: "stable",
  test: ""
});


const TickerTrend = props => {
  const [price, setPrice] = useState(36.42);
  const [difference, setdifference] = useState(1.95);
  const [stock, setStock] = useState(props.ticker);

  useEffect(() => {
    iex
    .symbol(stock).quote()
    .then(res => { 
		setdifference(res.changePercent);
		setPrice(res.latestPrice);
		})
  }, [stock]);

  return (
    <View
    style={{
      flex: 1,
      flexDirection: props.vertical ? 'row' : 'column'
    }}>
    <Text style={{color: props.color, fontSize: 18}}>{price}</Text>
    <Text style={{color: '#5fad5f', fontSize: 18}}>{(difference * 100).toFixed(2)}%</Text>
</View>
  );
};

export default withTheme(TickerTrend);
