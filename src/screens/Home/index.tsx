import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {SearchBar, Category} from './Section';
import style from './style';
import {Screens} from 'navigator';
import {StackScreenProps} from '@react-navigation/stack';
import categories from '../../datas/category.json';
import ArrowLeft from '../../assets/icons/ArrowLeft';

type Props = StackScreenProps<Screens>;

const Home = ({navigation}: Props) => {
  const [value, setValue] = useState('');
  const [data, setData] = useState(categories);
  const [actions, setActions] = useState([
    {
      id: 0,
      name: 'All categories',
      data: categories,
    },
  ]);

  useEffect(() => {
    setData(pr => pr.filter(item => item.name.includes(value)));
  }, [value]);

  const categoryClick = useCallback((item: any) => {
    if (item.categories) {
      setData(item.categories);
      setActions(pr => [
        ...pr,
        {
          name: item.name,
          data: item.categories,
          id: pr.length,
        },
      ]);
      return;
    }
    let id = item.category_id,
      name = item.name;
    navigation.navigate('Category', {id, title: name});
  }, []);

  const actionPress = (item: any, index: number) => {
    setActions(pr => pr.slice(0, index + 1));
    setData(item.data);
  };

  return (
    <View style={style.container}>
      <SearchBar setValue={setValue} value={value} />
      <ScrollView>
        {actions.slice(0, actions.length - 1).map((item, index) => (
          <TouchableOpacity
            onPress={() => actionPress(item, index)}
            style={style.action}
            key={item.id}>
            <ArrowLeft size={15} />
            <Text style={style.actionTitle}>{item.name}</Text>
          </TouchableOpacity>
        ))}
        {actions.length > 1 && (
          <TouchableOpacity
            onPress={() =>
              actionPress(actions[actions.length - 2], actions.length - 2)
            }
            style={style.item}>
            <Text style={style.title}>{actions[actions.length - 1].name}</Text>
            <ArrowLeft size={20} style={style.arrowLeft} />
          </TouchableOpacity>
        )}
        <Category onPress={categoryClick} isOpen={true} data={data} />
      </ScrollView>
    </View>
  );
};

export default Home;
