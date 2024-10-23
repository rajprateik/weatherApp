import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = props => {
  const {onPress} = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>Search</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'orange',
    width: '40%',
  },
});
