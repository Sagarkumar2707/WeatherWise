import Geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../../assets/images';
import {WeatherCard} from '../../components/WeatherCard/WeatherCard';
import {
  useGetWeatherByCityQuery,
  useGetWeatherByCoordinatesQuery,
} from '../../services/integrations/weatherApi/weatherApi';
import {COLORS} from '../../styles/colors';
import {styles} from './styles';

export const Home = () => {
  const [cityName, setCityName] = useState<string>(''); // State for city name input
  const [submittedCity, setSubmittedCity] = useState<string>(''); // State for submitted city name
  const [currentCoords, setCurrentCoords] = useState<{
    lat: number;
    lon: number;
  } | null>(null); // State for current coordinates
  const navigation = useNavigation<any>(); // Navigation hook

  // Fetch weather by city
  const {
    data: cityWeather,
    error: cityError,
    isLoading: cityLoading,
  } = useGetWeatherByCityQuery(submittedCity, {
    skip: !submittedCity, // Skip query if no city is submitted
  });

  // Fetch weather by current location
  const {
    data: currentLocationWeather,
    error: currentError,
    isLoading: currentLoading,
  } = useGetWeatherByCoordinatesQuery(
    {lat: currentCoords?.lat, lon: currentCoords?.lon},
    {skip: !currentCoords},
  );

  // Get current location when the component mounts
  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setCurrentCoords({lat: latitude, lon: longitude}); // Set current location coordinates
      },
      error => {
        console.log('Error getting location:', error);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);

  const renderWeatherCard = (
    loading: boolean,
    error: string,
    weather: any,
    isCurrentLocation = false,
  ) => {
    if (loading) {
      return (
        <ActivityIndicator
          size="large"
          color={COLORS.white}
          style={styles.loader}
        />
      );
    }
    if (error) {
      return (
        <Text style={styles.error}>
          {isCurrentLocation
            ? 'Error fetching current location weather'
            : 'Error fetching weather data'}
        </Text>
      );
    }
    if (weather) {
      return (
        <WeatherCard
          weather={weather}
          isCurrentLocation={isCurrentLocation}
          onPress={() =>
            navigation.navigate('WeatherDetail', {detail: weather})
          }
        />
      );
    }
    return null;
  };

  return (
    <LinearGradient
      colors={[COLORS.linearGradient1, COLORS.linearGradient2]} // Assuming you have COLORS object
      style={styles.container}>
      <Text style={styles.title}>Weather App</Text>

      {/* Search input for city weather */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          value={cityName}
          onChangeText={e => setCityName(e)}
          placeholder="Enter city name"
          placeholderTextColor={COLORS.gray} // Replace with COLORS.gray
        />
        <TouchableOpacity
          onPress={() => {
            if (cityName.trim()) {
              setSubmittedCity(cityName); // Set submitted city if input is not empty
            }
          }}
          style={styles.searchIconContainer}>
          <FastImage source={Images.MagnifyGlass} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>

      {/* Conditionally render either the city weather or current location weather */}
      {submittedCity
        ? renderWeatherCard(cityLoading, cityError, cityWeather)
        : renderWeatherCard(
            currentLoading,
            currentError,
            currentLocationWeather,
            true,
          )}
    </LinearGradient>
  );
};
