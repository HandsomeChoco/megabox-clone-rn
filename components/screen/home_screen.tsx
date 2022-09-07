import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';

function Events() {
  return (
    <View style={style.event}>
      <Text>Events</Text>
    </View>
  );
}

function Body() {
  return (
    <View>
      <Text>Body</Text>
    </View>
  );
}

function Home() {
  return (
    <ScrollView style={style.home}>
      <Events />
      <Body />
    </ScrollView>
  );
}

const style = StyleSheet.create({
  home: {
    flexDirection: 'column',
  },
  event: {
    backgroundColor: '#120f3b',
  },
});

export default Home;
