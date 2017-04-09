import React, {PropTypes} from 'react';
import {Text,View,Image} from 'react-native';
 const  UserHeader = ({name,img}) => {
  return (
    <View style={{flex:2}}>
        <Image resizeMode="contain"  source={{uri: img}}
        style={{ top: 0,
  left: 0,
  bottom: 0,
  right: 0,position:'absolute'}}/>
      </View>

  );
}
export default UserHeader;
UserHeader.propTypes = {
  name : PropTypes.string.isRequired
};
