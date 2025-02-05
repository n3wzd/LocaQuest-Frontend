import { StyleSheet } from 'react-native';
import common from './common';
import theme from './theme';

export default StyleSheet.create({
  container: {
    ...common.container
  },
  title: {
   ...common.title
  },
  text: {
    ...common.text
  },
  input: {
    height: 50,
    borderColor: theme.colors.lightWine,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  signupLink: {
    marginTop: 20,
    color: theme.colors.darkWine,
    textAlign: 'center',
  },
  button: {
    backgroundColor: theme.colors.lightWine,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButton: {
    backgroundColor: theme.colors.disable,
  },
});
