import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import DividerHorzital from './dividerHorzital';
import Row from './row';

const Weatherlist = props => {
  const {cityforecast} = props;

  const renderWeatherItem = ({item}) => (
    <View style={styles.weatherItem}>
      <View style={styles.tableHead}>
        <Text style={{textAlign: 'center', fontSize: 18, color: 'black'}}>
          Date: {new Date(item.dt * 1000).toLocaleDateString()}
        </Text>
      </View>

      <DividerHorzital />
      <View style={styles.tableSecond}>
        <Text style={{textAlign: 'center', fontSize: 18, color: 'black'}}>
          {item.main.temp} °C
        </Text>
        <DividerHorzital />
        <Row firstdata={'Min'} seconddata={'Max'} />
        <DividerHorzital />
        <Row firstdata={item.main.temp_min} seconddata={item.main.temp_max} />
      </View>

      <DividerHorzital />
      <Row firstdata={'Pressure'} seconddata={item.main.pressure} />
      <DividerHorzital />
      <Row firstdata={'Humidity'} seconddata={item.main.humidity} />
    </View>
  );
  return (
    <View style={{flex: 1, marginVertical: 10}}>
      <FlatList
        scrollEnabled
        showsVerticalScrollIndicator={false}
        data={cityforecast}
        renderItem={renderWeatherItem}
        keyExtractor={item => item.dt.toString()}
      />
    </View>
  );
};

export default Weatherlist;

const styles = StyleSheet.create({
  weatherItem: {
    borderWidth: 1,
    marginVertical: 5,

    borderRadius: 5,
  },
  tableHead: {
    backgroundColor: 'orange',
    padding: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  tableSecond: {
    backgroundColor: '#bfbcbb',
    // padding: 5,
  },
});
