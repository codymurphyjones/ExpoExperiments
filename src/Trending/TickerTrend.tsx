// TabBar.js
import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';

import { withTheme } from '../theme';

/*import { IEXCloudClient } from "node-iex-cloud";
const fetch = require("./fetch");

 
const iex = new IEXCloudClient(fetch, {
  sandbox: true,
  publishable: "pk_843af40a088244598162fe8d13d10461",
  version: "stable",
  test: ""
});*/

import iex from '../IEXCloudObject';

const TickerTrend = props => {
  const [price, setPrice] = useState(0.0);
  const [difference, setdifference] = useState(0.0);
  const [visible, setVisible] = useState(false);
  const [stock, setStock] = useState(props.ticker);

  function setVisiblePrice(val) {
    setPrice(val);
}

function setVisibleDiff(val) {
  setdifference(val);
}

  useEffect(() => {
    iex
    .symbol(stock).quote()
    .then(res => { 
        setVisibleDiff(res.changePercent);
        setVisiblePrice(res.latestPrice);
        setVisible(true);
		    console.log(res); 
		})
  }, [stock]);

  return (
    <View
    style={{
      flex: 1,
      flexDirection: props.vertical ? 'column' : 'row',
      display: visible ? "flex" : "none",
      justifyContent: 'space-around'
    }}>
    <Text style={{color: props.color, fontSize: 18}}>{price}</Text>
    <Text style={{color: (difference > 0) ? '#5fad5f' : "red", fontSize: 18, marginLeft: 10}}>{(difference * 100).toFixed(2)}%</Text>
</View>
  );
};

export default withTheme(TickerTrend);
