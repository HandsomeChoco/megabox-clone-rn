import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Props from './type';

function MobileOrderIcon({
  focused,
  color = '#1abfda',
  size = 12,
}: Props): React.ReactNode {
  return (
    <Icon
      name="food-takeout-box-outline"
      size={size}
      color={focused ? color : 'gray'}
    />
  );
}

export default MobileOrderIcon;
