import React from 'react';
import { View } from 'react-native';

const CardSection = ({ children, style }) => (
  <View style={[styles.container, style]}>
    {children}
  </View>
);

const styles = {
  container: {
    margin: 4,
    flexDirection: 'row',
    alignItems: 'center'
  }
}

export default CardSection;