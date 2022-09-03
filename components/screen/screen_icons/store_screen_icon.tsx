import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Props from './type';

function StoreIcon({
  focused = true,
  color = '#1abfda',
  size = 12,
}: Props): React.ReactNode {
  return (
    <Icon
      name="shopping-outline"
      size={size}
      color={focused ? color : 'gray'}
    />
  );
}

export default StoreIcon;
