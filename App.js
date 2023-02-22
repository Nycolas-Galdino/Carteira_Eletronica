/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Routes from './src/routes';
import {SafeAreaView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Routes />
    </SafeAreaView>
  );
}
