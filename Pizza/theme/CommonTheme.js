import { StyleSheet } from 'react-native';

const metrics = {
  // General
  borderRadius: 18,
  padding: 25,
  headerHeight: 90,
  marginSpacer: 20,
  marginHorizontal: 8,
  borderWidth: 2,

  // Buttons
  buttonPaddingVertical: 15,
  buttonPaddingHorizontal: 25,
  buttonMarginVertical: 5,

  // Icons
  smallIconSize: 17,
};

const createThemeFromColorScheme = colorScheme => {
  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: colorScheme.backgroundColor,
    },

    container: {
      flex: 1,
      backgroundColor: colorScheme.backgroundColor,
      padding: metrics.padding,
    },

    header: {
      backgroundColor: colorScheme.primaryColor,
      alignItems: 'center',
      justifyContent: 'center',
      height: metrics.headerHeight,
    },

    whiteIconHeader: {
      backgroundColor: colorScheme.backgroundColor,
      paddingVertical: 20,
      paddingHorizontal: 25,
      alignItems: 'center',
      flexDirection: 'row',
    },

    headerText: {
      backgroundColor: colorScheme.backgroundColor,
      color: colorScheme.onPrimaryColor,
      fontWeight: 'bold',
      fontSize: 30,
    },

    flexRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },

    title1: {
      fontSize: 35,
      fontFamily: 'Manrope-Regular',
      color: colorScheme.textColor,
    },

    title2: {
      fontSize: 50,
      color: colorScheme.textColor,
      fontFamily: 'Manrope-Bold',
    },

    paragraph: {
      fontSize: 18,
      fontFamily: 'Manrope-Regular',
      color: colorScheme.textColor,
    },

    subtext: {
      fontSize: 14,
      fontFamily: 'Manrope-Regular',
      color: colorScheme.textColor,
      opacity: 0.7,
    },
  });
};

export { createThemeFromColorScheme, metrics };
