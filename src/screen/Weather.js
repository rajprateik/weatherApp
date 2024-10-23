import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {getWeatherForecast} from '../Services/WheatherServices';
import Weatherlist from '../component/weatherlist';
import CustomButton from '../component/customButton';
import Errormsg from '../component/errormsg';

const Weather = () => {
  const [city, setCity] = useState('');
  const [cityforecast, setCityForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await getWeatherForecast(city);
      setCityForecast(data);
    } catch (err) {
      setError('Error fetching weather data');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headtext}>Weather in your city</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        value={city}
        onChangeText={setCity}
      />
      <CustomButton onPress={fetchWeather} />
      {loading ? (
        <ActivityIndicator />
      ) : error ? (
        <Errormsg err={error} />
      ) : (
        <Weatherlist cityforecast={cityforecast} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  headtext: {
    fontSize: 35,
    fontWeight: '600',
    padding: 20,
    color: 'orange',
  },
  input: {
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: 'orange',
    padding: 8,
    marginBottom: 10,
  },
});

export default Weather;
