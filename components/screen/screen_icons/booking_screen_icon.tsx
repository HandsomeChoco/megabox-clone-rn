import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Props from './type';

function BookingIcon({
  focused,
  color = '#1abfda',
  size = 12,
}: Props): React.ReactNode {
  return (
    <Icon
      name="ticket-confirmation-outline"
      size={size}
      color={focused ? color : 'gray'}
    />
  );
}

export default BookingIcon;
