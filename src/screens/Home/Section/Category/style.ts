import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  headTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginHorizontal: 16,
  },
  list: {
    paddingLeft: 16,
    paddingVertical: 12,
    paddingRight: 4,
  },
  item: {
    padding: 12,
    borderRadius: 12,
    shadowColor: '#000',
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 1,
    marginHorizontal: 5,
  },
  image: {
    width: 30,
    aspectRatio: 1,
    resizeMode: 'contain',
    marginRight: 10,
  },
  title: {
    color: '#000',
    fontSize: 15,
    fontWeight: '500',
    flex: 1,
  },
  arrowLeft: {
    opacity: 0.6,
    transform: [{rotate: '180deg'}],
  },
});
