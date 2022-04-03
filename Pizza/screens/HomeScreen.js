import React, { useContext } from 'react';

import { StatusBar, View, Text, Button } from 'react-native';

// Theme
import { ThemeContext, AuthContext } from '../components/Context';

const HomeScreen = () => {
  const appTheme = useContext(ThemeContext);
  const { loginState, signOut } = useContext(AuthContext);

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
          <Text>{loginState.me.name}</Text>
          <Button onPress={() => signOut()} title="Esci" />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
