import React, {useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';

import {
  WillowCompat,
  Xpro2Compat,
  ToasterCompat,
  MoonCompat,
  HudsonCompat,
} from 'react-native-image-filter-kit';

import AdIcon from 'react-native-vector-icons/AntDesign';

import Label from '~/components/Label';

import {Container} from './styles';

import logo from '../../assets/todo_logo.png';

export default function BeforeAfter({route, navigation}) {
  const image = (
    <Image
      source={route.params.imgSource}
      resizeMode="contain"
      style={{height: 200, width: 500, marginTop: '1%'}}
    />
  );

  function renderSwitch(option) {
    switch (option) {
      case 1:
        return <WillowCompat image={image} />;
      case 2:
        return <Xpro2Compat image={image} />;
      case 3:
        return <ToasterCompat image={image} />;
      case 4:
        return <MoonCompat image={image} />;
      case 5:
        return <HudsonCompat image={image} />;
      default:
        return null;
    }
  }

  return (
    <Container>
      <TouchableOpacity
        style={{position: 'absolute', left: '90%', top: '1%'}}
        onPress={() => navigation.goBack()}>
        <AdIcon name="back" size={20} color="#138a72" />
      </TouchableOpacity>
      <Image
        source={logo}
        resizeMode="contain"
        style={{height: 80, width: 80, marginTop: '15%'}}
      />

      <Label title="Before" />
      {image}
      <Label title="After" />
      {renderSwitch(route.params.filter)}
    </Container>
  );
}
