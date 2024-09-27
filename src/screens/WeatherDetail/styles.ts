import { respFontSize } from './../../utils/responsiveSize';
import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/colors';
import {normalize} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'white',
  },
  backIcon: {
    width: normalize(30),
    height: normalize(30),
  },
  title: {
    fontSize:  respFontSize(32),
    color: COLORS.white,
    marginBottom: 10,
    textAlign: 'center',
    marginLeft: 20,
    fontWeight: '500',
  },
  icon: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
  detailIcon: {width: normalize(30), height: normalize(35)},
  temp: {
    fontSize: 50,
    color: COLORS.orange,
    marginVertical: 10,
  },
  description: {
    fontSize: 18,
    color: COLORS.lightGray,
    fontStyle: 'italic',
    marginBottom: 20,
  },
  card: {
    alignSelf: 'center',
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 15,
    shadowColor: COLORS.black,
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    marginTop: 20,
    width: '100%',
  },
  cardTitle: {
    fontSize: 24,
    color: 'black',
    marginBottom: 15,
    fontWeight: 'bold',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  detail: {
    fontSize: 18,
    color: 'black',
    marginLeft: 10,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  loader: {
    marginTop: 20,
  },
});
