import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

import AdIcon from 'react-native-vector-icons/AntDesign';

import {Container} from './styles';
import Button from '~/components/Button';

import logo from '../../assets/todo_logo.png';

export default function ImageEditor({navigation}) {
  return (
    <Container>
      <TouchableOpacity
        style={{position: 'absolute', left: '90%', top: '1%'}}
        onPress={() => navigation.navigate('Main')}>
        <AdIcon name="back" size={20} color="#138a72" />
      </TouchableOpacity>
      <Image
        source={logo}
        resizeMode="contain"
        style={{height: 80, width: 80, marginTop: '15%'}}
      />

      <Button title="Select Image" onPress />
    </Container>
  );
}
