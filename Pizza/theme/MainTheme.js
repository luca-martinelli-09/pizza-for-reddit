import {
  theme as lightTheme,
  colorScheme as colorSchemeLight,
  statusBarProps as satusBarLightProps,
} from './LightTheme';
import {
  theme as darkTheme,
  colorScheme as colorSchemeDark,
  statusBarProps as satusBarDarkProps,
} from './DarkTheme';
import { metrics } from './CommonTheme';

const MainTheme = {
  light: {
    colorScheme: colorSchemeLight,
    style: lightTheme,
    statusBarProps: satusBarLightProps,
    metrics: metrics,
  },
  dark: {
    colorScheme: colorSchemeDark,
    style: darkTheme,
    statusBarProps: satusBarDarkProps,
    metrics: metrics,
  },
};

export { MainTheme };
