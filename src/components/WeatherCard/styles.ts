import {StyleSheet} from 'react-native';
import {COLORS} from './../../styles/colors';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 15,
    shadowColor: COLORS.black,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    marginTop: 30,
    alignItems: 'center',
  },
  cityName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: COLORS.gray,
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: COLORS.light,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  icon: {
    width: 80,
    height: 80,
  },
  temp: {
    fontSize: 50,
    fontWeight: 'bold',
    marginVertical: 10,
    color: COLORS.orange,
  },
  description: {
    fontSize: 18,
    fontStyle: 'italic',
    color: COLORS.gray,
  },
});
