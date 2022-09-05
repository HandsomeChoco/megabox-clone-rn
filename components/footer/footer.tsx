import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator, BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Booking from '../screen/booking_screen';
import Home from '../screen/home_screen';
import MobileOrder from '../screen/mobile_order_screen';
import My from '../screen/my_screen';
import Store from '../screen/store_screen';
import HomeIcon from '../screen/screen_icons/home_screen_icon';
import BookingIcon from '../screen/screen_icons/booking_screen_icon';
import StoreIcon from '../screen/screen_icons/store_screen_icon';
import MobileOrderIcon from '../screen/screen_icons/mobile_order_screen_icon';
import MyIcon from '../screen/screen_icons/my_screen_icon ';
import Header from '../header/header';

const Tab = createBottomTabNavigator();

function Footer() {
  const options: BottomTabNavigationOptions = {
    tabBarActiveTintColor: '#1abfda',
    tabBarInactiveTintColor: 'gray',
    headerTitle: Header,
    headerStyle: {
      backgroundColor: '#120f3b',
    },
    headerTitleAlign: 'center',
    headerTitleStyle: {
      color: 'white',
    },
  };

  return (
    <View style={style.container}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={options}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{tabBarIcon: HomeIcon}}
          />
          <Tab.Screen
            name="Store"
            component={Store}
            options={{tabBarIcon: StoreIcon}}
          />
          <Tab.Screen
            name="Booking"
            component={Booking}
            options={{tabBarIcon: BookingIcon}}
          />
          <Tab.Screen
            name="MobileOrder"
            component={MobileOrder}
            options={{tabBarIcon: MobileOrderIcon}}
          />
          {/* eslint-disable-next-line prettier/prettier */}
          <Tab.Screen
            name="My"
            component={My}
            options={{tabBarIcon: MyIcon}}
          />
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
