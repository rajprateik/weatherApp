import {View, Text} from 'react-native';
import React from 'react';

const Errormsg = ({err}) => {
  return (
    <View>
      <Text>{err}</Text>
    </View>
  );
};

export default Errormsg;
