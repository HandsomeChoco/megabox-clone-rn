/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <SafeAreaView style={style.theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={style.theme.backgroundColor}
      />
      <Footer />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  theme: {
    backgroundColor: '#120f3b',
  },
});

export default App;
