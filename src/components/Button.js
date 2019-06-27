import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#b869ff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 16,
    paddingBottom: 16
  },
  buttonStyle: {
    display: 'flex',
    alignItems: 'space-around',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#b869ff',
    marginLeft: 5,
    marginRight: 5,
    maxWidth: 312,
    lineHeight: 2.67,
    width: 312
  }
};

export default Button;
