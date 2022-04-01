import React, { useContext } from 'react';

import { StatusBar, View } from 'react-native';

// Theme
import { ThemeContext } from '../components/Context';

const HomeScreen = () => {
  const appTheme = useContext(ThemeContext);

  return (
    <View style={appTheme.style.mainContainer}>
      <StatusBar {...appTheme.satusBarProps} />
      <View style={appTheme.style.container}>
        <View
          style={{
            marginBottom: 50,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
