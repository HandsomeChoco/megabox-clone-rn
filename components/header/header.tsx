import React from 'react';
import {View, StyleSheet} from 'react-native';
import VectorImage from 'react-native-vector-image';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicon from 'react-native-vector-icons/Ionicons';

function UserMemberShip() {
  return <Ionicon name="barcode-sharp" color="#fff" size={20} />;
}
function BI() {
  return (
    <VectorImage source={require('../../assets/svgs/brand_identity.svg')} />
  );
}

function RightSideBar() {
  return <Icon name="bars" color="#fff" size={20} />;
}

function Header() {
  return (
    <View style={style.header}>
      <UserMemberShip />
      <BI />
      <RightSideBar />
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
export default Header;
