import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SimplePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to ColloPro!</Text>
      <Text style={styles.paragraph}>
        Master collocations - unleash fluent expression
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default SimplePage;
