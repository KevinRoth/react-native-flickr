import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    // borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    // borderBottomWidth: 2,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    elevation: 1,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 12
  }
};

export default Card;
