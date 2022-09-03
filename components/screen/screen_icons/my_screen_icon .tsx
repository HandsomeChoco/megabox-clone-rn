import React from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import Props from './type';

function MyIcon({
  focused,
  color = '#1abfda',
  size = 12,
}: Props): React.ReactNode {
  return <Icon name="person" size={size} color={focused ? color : 'gray'} />;
}

export default MyIcon;
