import React from 'react';
import { View, Text } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  )
}

const styles = {
  headerContainer: {
    backgroundColor: '#50e5ad',
    height: 60,
    paddingTop: 18,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 20
  }
}

export default Header;