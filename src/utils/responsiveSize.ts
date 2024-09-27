import {Dimensions, PixelRatio, Platform} from 'react-native';

export const {width, height} = Dimensions.get('window');
const screenWidth = width < height ? width : height;

export const responsiveSize = (size: number) => {
  const responsiveValue = screenWidth / 480;
  return responsiveValue * size;
};

const sizeFactor: number = 1.25;

export const respFontSize = (size: number) =>
  responsiveSize(size * sizeFactor) / PixelRatio.getFontScale();

const {width: SCREEN_WIDTH} = Dimensions.get('window');

// based on iphone 14 pro's scale
const scale = SCREEN_WIDTH / 393;

export function normalize(size: number) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export const responsiveWidth = (width: number) => {
  return (Dimensions.get('window').width * width) / 393;
};

export const responsiveHeight = (height: number) => {
  return (Dimensions.get('window').height * height) / 852;
};
