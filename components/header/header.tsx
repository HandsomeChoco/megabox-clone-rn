import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function Header() {
  return (
    <View style={style.headerContainer}>
      <Text>header!!</Text>
    </View>
  );
}

const style = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'yellow',
  },
});
export default Header;
