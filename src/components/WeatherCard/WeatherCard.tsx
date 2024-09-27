import {Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';

export const WeatherCard = ({weather, onPress, isCurrentLocation}: any) => {
  const getIconUrl = (icon: string) =>
    `https://openweathermap.org/img/wn/${icon}@4x.png`; // Function to get icon URL

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text style={styles.cityName}>
        {weather.name} {isCurrentLocation ? '(Current Location)' : ''}
      </Text>
      <View style={styles.iconContainer}>
        <FastImage
          style={styles.icon}
          source={{
            uri: getIconUrl(weather.weather[0].icon),
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <Text style={styles.temp}>{Math.round(weather.main.temp)}°C</Text>
      <Text style={styles.description}>{weather.weather[0].description}</Text>
    </TouchableOpacity>
  );
};
