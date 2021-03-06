// Settings.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { withTheme, ThemePropTypes } from 'With/theme'
/*
type SettingsScreenProps = {
  setTheme?: any,
  theme?: any,
  themes?: ThemePropTypes
}*/

const SettingsScreen = (props) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => props.setTheme(item.key)}>
      <View
        style={[
          style.itemContainer,
          {
            backgroundColor: item.backgroundColor || "#fff",
          },
        ]}
      >
        <Text style={[style.itemText, { color: item.color }]}>{item.key}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      style={style.container}
      ListHeaderComponent={
        <Text style={[style.headline, { color: "#000"}]}>
          Choose your theme?:
        </Text>
      }
      data={props.themes}
      renderItem={renderItem}
    />
  );
};

const style = StyleSheet.create({
  container: { flex: 1 },
  headline: {
    marginTop: 60,
    marginBottom: 20,
    marginLeft: 20,
    fontWeight: '200',
    fontSize: 24,
  },
  itemContainer: {
    height: 100,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  itemText: { fontWeight: 'bold' },
});

export default withTheme(SettingsScreen);