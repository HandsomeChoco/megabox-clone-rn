import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Booking from '../screen/booking_screen';
import Home from '../screen/home_screen';
import MobileOrder from '../screen/mobile_order_screen';
import My from '../screen/my_screen';
import Store from '../screen/store_screen';

const Tab = createBottomTabNavigator();

function Footer() {
  return (
    <View style={style.container}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Store" component={Store} />
          <Tab.Screen name="Booking" component={Booking} />
          <Tab.Screen name="MobileOrder" component={MobileOrder} />
          <Tab.Screen name="My" component={My} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: '100%',
  },
});
export default Footer;
