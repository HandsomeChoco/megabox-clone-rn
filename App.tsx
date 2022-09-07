/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Fragment} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <Fragment>
      <SafeAreaView style={style.top} />
      <StatusBar
        barStyle="light-content"
        backgroundColor={style.theme.backgroundColor}
      />
      <SafeAreaView style={style.bottom}>
        <Footer />
      </SafeAreaView>
    </Fragment>
  );
};

const style = StyleSheet.create({
  top: {
    backgroundColor: '#120f3b',
    flex: 0,
  },
  bottom: {
    flex: 1,
  },
  theme: {
    backgroundColor: '#120f3b',
  },
});

export default App;
