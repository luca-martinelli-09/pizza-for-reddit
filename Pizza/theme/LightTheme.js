import { createThemeFromColorScheme } from './CommonTheme';

const colorScheme = {
  // General
  backgroundColor: '#FEFBF3',
  accentColor: '#ff4500',
  textColor: '#333',
  errorColor: '#C84361',

  onlineColor: '#80ED99',

  // Button
  buttonColor: '#32AFA9',
  onButtonColor: '#FEFBF3',
};

const statusBarProps = {
  translucent: true,
  backgroundColor: 'transparent',
  barStyle: 'dark-content',
};

const theme = createThemeFromColorScheme(colorScheme);

export { theme, colorScheme, statusBarProps };
