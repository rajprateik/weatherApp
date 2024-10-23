import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Row = props => {
  const {firstdata, seconddata} = props;
  return (
    <View style={styles.row}>
      <Text style={styles.text}>{firstdata}</Text>
      <Text style={styles.text}>|</Text>
      <Text style={styles.text}>{seconddata}</Text>
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
});
