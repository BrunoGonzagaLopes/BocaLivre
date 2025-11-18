import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {// This makes it an inset shadow
    width: '85%',
    height: 45,
    backgroundColor: '#ffffffff',
    borderRadius: 12,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
    boxShadow: 'inset 0px 3px 2px 2px rgba(0,0,0,0.1)'
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  iconButton: {
    marginLeft: 10,
    padding: 5,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  }
});