import {createThemeFromColorScheme} from './CommonTheme';

const colorScheme = {
  // General
  backgroundColor: '#000000',
  accentColor: '#FF4500',
  textColor: '#fff',
  errorColor: '#F38BA0',

  // Button
  buttonColor: '#CDF2CA',
  onButtonColor: '#064420',
};

const statusBarProps = {
  backgroundColor: colorScheme.backgroundColor,
  barStyle: 'light-content',
};

const theme = createThemeFromColorScheme(colorScheme);

export {theme, colorScheme, statusBarProps};