import React from 'react';
import { View } from 'react-native';

export default ({children}) => (
  <View style={styles.container}>
    {children}
  </View>
);

const styles = {
  container: {
    flex: 1,
    padding: 5,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 28,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: '#000',
    backgroundColor: '#fff'
  }
}