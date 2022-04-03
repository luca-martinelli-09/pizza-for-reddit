import { createThemeFromColorScheme } from './CommonTheme';

const colorScheme = {
  // General
  backgroundColor: '#000000',
  accentColor: '#ff4500',
  textColor: '#fff',
  errorColor: '#F38BA0',
  
  onlineColor: '#80ED99',

  // Button
  buttonColor: '#ff4500',
  onButtonColor: '#ffffff',
};

const statusBarProps = {
  translucent: true,
  backgroundColor: 'transparent',
  barStyle: 'light-content',
};

const theme = createThemeFromColorScheme(colorScheme);

export { theme, colorScheme, statusBarProps };