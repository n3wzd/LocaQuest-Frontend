import { StyleSheet } from 'react-native';
import common from './common';
import theme from './theme';

export default StyleSheet.create({
  screen: {
    ...common.screen,
    padding: 10,
  },
  container: {
    ...common.container
  },
  title: {
   ...common.title
  },
  text: {
    ...common.text
  },
  warnText: {
    ...common.text,
    color: theme.colors.lightGrey
  },
  designedTitle: {
    ...common.designedTitle,
  },
  input: {
    height: 50,
    borderColor: theme.colors.darkCyan,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    backgroundColor: theme.colors.white,
    borderRadius: 12,
  },
  signupLink: {
    marginTop: 20,
    color: theme.colors.darkCyan,
    textAlign: 'center',
  },
  button: {
    backgroundColor: theme.colors.darkCyan,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLine: {
    backgroundColor: theme.colors.transparent,
    borderColor: theme.colors.darkCyan,
    borderWidth: 1.5,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButton: {
    backgroundColor: theme.colors.disable,
  },
});
