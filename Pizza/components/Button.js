import React, { useContext } from 'react';

import { View, Text, TouchableHighlight } from 'react-native';

// External libraries
import Icon from 'react-native-vector-icons/Ionicons';

// Theme
import { ThemeContext } from '../components/Context';

const Button = props => {
  const appTheme = useContext(ThemeContext);

  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={{
          borderRadius: appTheme.metrics.borderRadius,
          marginVertical: appTheme.metrics.buttonMarginVertical,
        }}>
      <View
        style={{
          paddingVertical:
            appTheme.metrics.buttonPaddingVertical * (props.mini ? 0.5 : 1),
          paddingHorizontal: appTheme.metrics.buttonPaddingHorizontal,
          backgroundColor: props.style && props.style.backgroundColor ? props.style.backgroundColor : appTheme.colorScheme.buttonColor,
          borderRadius: appTheme.metrics.borderRadius,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        {props.icon ? (
          <Icon
            name={props.icon}
            size={25}
            style={{
              marginRight: props.title ? appTheme.metrics.marginHorizontal : 0,
            }}
            color={props.style && props.style.color ? props.style.color : appTheme.colorScheme.onButtonColor}
            {...props.iconProps}
          />
        ) : null}
        {props.title ? (
          <Text
            style={{
              color: props.style && props.style.color ? props.style.color : appTheme.colorScheme.onButtonColor,
              fontSize: 16,
              fontFamily: 'Manrope-Bold',
              fontWeight: 'bold',
            }}>
            {props.title}
          </Text>
        ) : null}
      </View>
    </TouchableHighlight>
  );
};

const OutlineButton = props => {
  const appTheme = useContext(ThemeContext);

  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={[
        props.style,
        {
          borderRadius: appTheme.metrics.borderRadius,
          marginVertical: appTheme.metrics.buttonMarginVertical,
        },
      ]}>
      <View
        style={{
          paddingVertical:
            appTheme.metrics.buttonPaddingVertical * (props.mini ? 0.5 : 1),
          paddingHorizontal: appTheme.metrics.buttonPaddingHorizontal,
          backgroundColor: appTheme.colorScheme.backgroundColor,
          borderRadius: appTheme.metrics.borderRadius,
          borderWidth: appTheme.metrics.borderWidth,
          borderColor: appTheme.colorScheme.buttonColor,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        {props.icon ? (
          <Icon
            name={props.icon}
            size={25}
            style={{
              marginRight: props.title ? appTheme.metrics.marginHorizontal : 0,
            }}
            color={appTheme.colorScheme.buttonColor}
            {...props.iconProps}
          />
        ) : null}
        {props.title ? (
          <Text
            style={{
              color: appTheme.colorScheme.buttonColor,
              fontSize: 16,
              fontFamily: 'Manrope-Bold',
              fontWeight: 'bold',
            }}>
            {props.title}
          </Text>
        ) : null}
      </View>
    </TouchableHighlight>
  );
};

export { Button, OutlineButton };
