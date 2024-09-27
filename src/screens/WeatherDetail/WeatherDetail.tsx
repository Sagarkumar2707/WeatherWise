import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../../assets/images';
import {COLORS} from '../../styles/colors';
import {styles} from './styles';

export const WeatherDetail = ({route}: any) => {
  // Extract city from route parameters
  const {detail} = route?.params;

  const navigation = useNavigation();

  // Component to display individual weather details
  const WeatherDetailItem = ({title, imageSource}: any) => (
    <View style={[styles.detailItem]}>
      <FastImage
        style={styles.detailIcon}
        resizeMode="contain"
        source={imageSource}
      />
      <Text style={styles.detail}>{title}</Text>
    </View>
  );

  return (
    <LinearGradient
      colors={[COLORS.linearGradient1, COLORS.linearGradient2]}
      style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <FastImage style={styles.backIcon} source={Images.BackIcon} />
          </TouchableOpacity>
          <Text style={[styles.title]}>{detail.name} Detail</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Weather Details</Text>

          {/* Display weather details using WeatherDetailItem component */}
          <WeatherDetailItem
            title={`Humidity: ${detail.main.humidity}%`}
            imageSource={Images.Humidity}
          />
          <WeatherDetailItem
            title={`Wind Speed: ${detail.wind.speed} m/s`}
            imageSource={Images.WindIcon}
          />
          <WeatherDetailItem
            title={`Cloudiness: ${detail.clouds.all}%`}
            imageSource={Images.Cloud}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};
