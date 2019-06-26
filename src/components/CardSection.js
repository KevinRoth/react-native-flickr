import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    padding: 5,
    backgroundColor: '#fff',
    borderColor: '#a40bdd',
    position: 'relative',
    paddingTop: 24,
    paddingRight: 12,
    paddingBottom: 24,
    paddingLeft: 12,
    minHeight: 96,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCardStyle: {

  },
};

export default CardSection;
