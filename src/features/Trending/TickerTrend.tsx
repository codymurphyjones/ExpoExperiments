// TabBar.js
import React, {useEffect, useState, useMemo} from 'react';
import { View, Text } from 'react-native';

import { withTheme } from 'With/theme';

import { iex } from 'Utils'
import Quote from "node-iex-cloud/lib/types/Quote";

type TickerTrendProps = {
  ticker: string,
  color?: string,
  vertical?: boolean
}

const TickerTrend = (props: TickerTrendProps) => {
  const [price, setPrice] = useState(0.0);
  const [difference, setdifference] = useState(0.0);
  const [visible, setVisible] = useState(false);
  const [stock, setStock] = useState(props.ticker);

  useEffect(() => {
    iex
    .symbol(stock).quote()
    .then((res : Quote) => { 
      try {
        setdifference(res.changePercent);
        setPrice(res.latestPrice);
        setVisible(true);
      }
      catch {}
      
	
		})
  }, [stock]);

  return useMemo(() =>(
    <View
    style={{
      flex: 1,
      flexDirection: props.vertical ? 'column' : 'row',
      display: visible ? "flex" : "none",
      justifyContent: 'space-around'
    }}>
    <Text style={{color: props.color, fontSize: 18}}>{price}</Text>
    <Text style={{color: (difference > 0) ? '#5fad5f' : "red", fontSize: 18, marginLeft: 10}}>
		{(difference > 0) ? "+" : ""}{(difference * 100).toFixed(2)}%
	</Text>
</View>
  ),[difference,visible,stock,price]);
};

export default withTheme(TickerTrend);
