import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {memo} from 'react';
import style from './style';
import ArrowLeft from '../../../../assets/icons/ArrowLeft';

const Category = ({
  data,
  onPress,
}: {
  data: any;
  isOpen: boolean;
  onPress: (item: any) => void;
}) => {
  return (
    <View style={style.container}>
      {data.map((item: any) => {
        return (
          <TouchableOpacity
            key={item.id}
            onPress={() => onPress(item)}
            style={style.item}>
            {!!item.image && (
              <Image style={style.image} source={{uri: item.image}} />
            )}
            <Text style={style.title}>{item.name}</Text>
            <ArrowLeft size={20} style={style.arrowLeft} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default memo(Category);
