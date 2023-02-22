/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default props => {
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text>Lorem Ipsum</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  // containerLogo: {},
  containerText: {flex: 1},
});
