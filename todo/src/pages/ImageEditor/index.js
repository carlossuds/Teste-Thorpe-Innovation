import React, {useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import {
  WillowCompat,
  Xpro2Compat,
  ToasterCompat,
  MoonCompat,
  HudsonCompat,
} from 'react-native-image-filter-kit';

import AdIcon from 'react-native-vector-icons/AntDesign';

import {Container, OptionsDiv} from './styles';
import Button from '~/components/Button';

import logo from '../../assets/todo_logo.png';

export default function ImageEditor({navigation}) {
  const [imgSource, setImgSource] = useState('');

  const [options] = useState([1, 2, 3, 4, 5]);
  const [filter, setFilter] = useState('');

  function pickImage() {
    ImagePicker.showImagePicker((response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};

        setImgSource(source);
      }
    });
  }

  const image = imgSource !== '' && (
    <Image
      source={imgSource}
      resizeMode="contain"
      style={{height: 400, width: 2000, marginTop: '1%'}}
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
        onPress={() => navigation.navigate('Main')}>
        <AdIcon name="back" size={20} color="#138a72" />
      </TouchableOpacity>
      <Image
        source={logo}
        resizeMode="contain"
        style={{height: 80, width: 80, marginTop: '15%'}}
      />

      <Button title="Select Image" onPress={() => pickImage()} />

      {imgSource !== '' && (
        <>
          <OptionsDiv>
            {options.map((o) => (
              <Button
                title={o}
                key={options.indexOf(o)}
                style={{height: 50, width: 50}}
                onPress={() => setFilter(o)}
              />
            ))}
          </OptionsDiv>

          {filter !== '' ? renderSwitch(filter) : image}
        </>
      )}
    </Container>
  );
}
