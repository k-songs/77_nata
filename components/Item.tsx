import React from 'react';
import { View, Text } from 'react-native';

interface ItemProps {
  name: string;
  price: number;
}

const Item = ({ name, price }: ItemProps) => {
  return (
    <View>
      <Text>
        {name} - {price}
      </Text>
    </View>
  );
};

export default Item;
