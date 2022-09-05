import React from 'react';
import {View, StyleSheet} from 'react-native';
import VectorImage from 'react-native-vector-image';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicon from 'react-native-vector-icons/Ionicons';

function UserMemberShip() {
  return (
    <Ionicon name="barcode-sharp" color="#fff" size={20} style={style.box} />
  );
}
function BI() {
  return (
    <View>
      <VectorImage source={require('../../assets/svgs/brand_identity.svg')} />
    </View>
  );
}

function RightSideBar() {
  return (
    <View style={style.box}>
      <Icon name="bars" color="#fff" size={20} />
    </View>
  );
}

function Header() {
  return (
    <View style={style.headerContainer}>
      <UserMemberShip />
      <BI />
      <RightSideBar />
    </View>
  );
}

const style = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  box: {
    width: 20,
    height: 20,
  },
});
export default Header;
