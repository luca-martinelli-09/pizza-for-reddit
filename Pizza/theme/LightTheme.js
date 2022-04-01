import {createThemeFromColorScheme} from './CommonTheme';

const colorScheme = {
  // General
  backgroundColor: '#FEFBF3',
  textColor: '#333',
  errorColor: '#C84361',

  // Button
  buttonColor: '#32AFA9',
  onButtonColor: '#FEFBF3',
};

const statusBarProps = {
  backgroundColor: colorScheme.backgroundColor,
  barStyle: 'dark-content',
};

const theme = createThemeFromColorScheme(colorScheme);

export {theme, colorScheme, statusBarProps};
