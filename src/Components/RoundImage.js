import React, {PropTypes} from 'react';
import {Image,View} from 'react-native';
const RoundImage = ({src}) => {
  return (
    <View style={{}}>
    <Image
      source={{uri: src}}
      style={{borderRadius:100,height:200,width:200}}
    />
  </View>
  );
}


export default RoundImage;
