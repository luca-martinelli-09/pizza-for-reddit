import React, { useContext } from 'react';

import { Button, StatusBar, View } from 'react-native';

// Theme
import { ThemeContext, AuthContext } from '../components/Context';

const LoginScreen = () => {
  const appTheme = useContext(ThemeContext);
  const { signIn } = useContext(AuthContext);

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
          <Button onPress={() => signIn()} title="Accedi" />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
