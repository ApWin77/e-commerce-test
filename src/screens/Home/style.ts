import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  contentContainer: {
    paddingBottom: 10,
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingVertical: 8,
  },
  actionTitle: {
    fontSize: 13,
    color: '#000',
  },
  item: {
    flexDirection: 'row',
    marginRight: 20,
    paddingLeft: 15,
    justifyContent: 'space-between',
    marginTop: 20,
  },
  title: {
    fontSize: 15,
    color: '#1a73e8',
  },
  arrowLeft: {
    transform: [{rotate: '-90deg'}],
  },
});
