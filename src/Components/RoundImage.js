import React, {PropTypes} from 'react';
import {Image,View} from 'react-native';
const RoundImage = ({src}) => {
  return (
    <View>
    <Image
      source={{uri: src}}
      style={{borderRadius:100,height:200,width:200}}
    />
  </View>
  );
}

RoundImage.propTypes = {
  img: PropTypes.string
};

export default RoundImage;
