import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
      <Icon
          name='sc-telegram'
          type='evilicon'
          color='#517fa4'
      />
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#b869ff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    display: 'flex',
    alignItems: 'space-around',
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#ffffff',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#b869ff',
    marginLeft: 5,
    marginRight: 5,
    maxWidth: 312,
    lineHeight: 2.67
  }
};

export default Button;
